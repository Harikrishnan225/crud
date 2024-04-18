import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeqStudentService } from 'src/app/services/seq-student/seq-student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-editstudentsql',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editstudentsql.component.html',
  styleUrls: ['./editstudentsql.component.scss']
})
export class EditstudentsqlComponent implements OnInit {
  studentEditSqlForm!: FormGroup;
  studentId: any;
  selectedStudentData: any;
  dropDownData: any;

  constructor(
    private fb: FormBuilder,
    private seqStudentService: SeqStudentService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToasterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.studentEditSqlForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      standard: ['', Validators.required]
    });
    this.activatedRoute.params.subscribe(studentDataId => {
      this.studentId = studentDataId['id'];
    }, err => {
      this.toaster.error('cant able to fetch students' + err);
    });
    this.seqStudentService.getDropDownData().subscribe(res => {
      this.dropDownData = res
    })
    this.getStudentData();
  }

  getStudentData() {
    this.seqStudentService.getStudentDataById(this.studentId).subscribe(studentData => {
      this.selectedStudentData = studentData;
      if (this.selectedStudentData) {
        this.studentEditSqlForm.patchValue({
          studentId: this.selectedStudentData.id,
          first_name: this.selectedStudentData.first_name,
          last_name: this.selectedStudentData.last_name,
          age: this.selectedStudentData.age,
          email: this.selectedStudentData.email,
          password: this.selectedStudentData.password,
          standard: this.selectedStudentData.standard
        })
      }
    })
  }

  studentFormSubmit() {
    if (this.studentEditSqlForm.valid) {
      const updateData = this.studentEditSqlForm.value;
      const studentId = this.selectedStudentData.id;

      this.seqStudentService.updateStudent(studentId, updateData).subscribe(() => {
        this.toaster.success('Student Updated Successfully');
        this.router.navigateByUrl('/student/view');
      }, err => {
        this.toaster.error('StudentData is not Updated' + err);
      })
    }
  }
}
