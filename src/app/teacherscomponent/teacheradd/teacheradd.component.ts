import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-teacheradd',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './teacheradd.component.html',
  styleUrls: ['./teacheradd.component.scss'],
  providers: [TeachersService, ToasterService]
})
export class TeacheraddComponent implements OnInit {
  teacherAddingForm!: FormGroup;
  value: any;
  dropDownData: any

  constructor(
    private fb: FormBuilder,
    private teachersService: TeachersService,
    private _location: Location,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.teacherAddingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      standard: ['', Validators.required]
    });
    this.teachersService.getDropDownData().subscribe(result => {
      this.dropDownData = result;
    }, err => {
      console.log(err);
    });
  }

  teacherFormSubmit() {
    if (this.teacherAddingForm.valid) {
      this.teachersService.addTeachersData(this.teacherAddingForm.value).subscribe(
        () => {
          this.toaster.success('Teacher added successfully');
          this._location.back();
        }, (err) => {
          this.toaster.error('Cant able to add teachers data' + err);
        })
    }
  }

}
