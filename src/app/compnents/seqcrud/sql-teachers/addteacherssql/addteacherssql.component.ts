import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SqlteachersService } from 'src/app/services/sql-teachers/sqlteachers.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-addteacherssql',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addteacherssql.component.html',
  styleUrls: ['./addteacherssql.component.scss']
})
export class AddteacherssqlComponent {
  teacherAddingSqlForm!: FormGroup
  dropDownData: any;

  constructor(
    private fb: FormBuilder,
    private teachersSqlService: SqlteachersService,
    private toaster: ToasterService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.teacherAddingSqlForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      standard: ['', Validators.required]
    });
    this.teachersSqlService.getDropDownData().subscribe(res => {
      this.dropDownData = res
      console.log(res);
      
    })
  }

  teacherFormSubmit() {
    if (this.teacherAddingSqlForm.valid) {
      console.log(this.teacherAddingSqlForm.value);
      this.teachersSqlService.createTeacher(this.teacherAddingSqlForm.value).subscribe(
        () => {
          this.toaster.success('Teacher added successfully');
          this._location.back();
        }, (err: string) => {
          this.toaster.error('Cant able to add teachers data' + err);
        })
    }
  }
}
