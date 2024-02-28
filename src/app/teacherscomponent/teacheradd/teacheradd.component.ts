import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-teacheradd',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './teacheradd.component.html',
  styleUrls: ['./teacheradd.component.scss'],
  providers: [TeachersService]
})
export class TeacheraddComponent implements OnInit {
  teacherAddingForm!: FormGroup;
  value: any;
  dropDownData: any

  constructor(
    private fb: FormBuilder,
    private teachersService: TeachersService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.teacherAddingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      standard: ['', Validators.required]
    })
  }

  teacherFormSubmit() {
    if (this.teacherAddingForm.valid) {
      this.teachersService.addTeachersData(this.teacherAddingForm.value).subscribe({
        next: (value) => {
          console.log('Teacher added successfully');
          this._location.back();
        }, error(err) {
          console.log('Cant able to add teachers data' + err);
        }
      })
    }
  }

  dropDownStandard() {
    this.teachersService.getDropDownData().subscribe(result => {
      this.dropDownData = result;
    })
  }
}
