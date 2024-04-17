import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SqlteachersService } from 'src/app/services/sql-teachers/sqlteachers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-editteacherssql',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editteacherssql.component.html',
  styleUrls: ['./editteacherssql.component.scss']
})
export class EditteacherssqlComponent implements OnInit {
  teacherEditSqlForm!: FormGroup;
  teacherId: any;
  selectedTeachers: any;
  dropDownData: any;

  constructor(
    private fb: FormBuilder,
    private teachersSqlService: SqlteachersService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToasterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.teacherEditSqlForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      standard: ['', Validators.required]
    });
    this.activatedRoute.params.subscribe(teachersDataId => {
      this.teacherId = teachersDataId['id'];
    }, err => {
      this.toaster.error('Cant able to fetch Teacher' + err)
    });
    this.getTeachersData()
  }

  getTeachersData() {
    this.teachersSqlService.getTeacherById(this.teacherId).subscribe(teachersData => {
      this.selectedTeachers = teachersData;
      if (this.selectedTeachers) {
        this.teacherEditSqlForm.patchValue({
          teachersId: this.selectedTeachers.id,
          first_name: this.selectedTeachers.first_name,
          last_name: this.selectedTeachers.last_name,
          age: this.selectedTeachers.age,
          email: this.selectedTeachers.email,
          password: this.selectedTeachers.password,
          standard: this.selectedTeachers.standard
        })
      }
    })
    this.teachersSqlService.getDropDownData().subscribe(res => {
      this.dropDownData = res
    })
  }

  teacherFormSubmit() {
    if (this.teacherEditSqlForm.valid) {
      const updatedData = this.teacherEditSqlForm.value;
      const teacherId = this.selectedTeachers.id;

      this.teachersSqlService.updateTeacher(teacherId, updatedData).subscribe(() => {
        this.toaster.success('Teacher Updated Successfully');
        this.router.navigateByUrl('/sqlteachers/view');
      }, error => {
        this.toaster.error('Teacher updating error' + error);
      })
    }
  }
}
