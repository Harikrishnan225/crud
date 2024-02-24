import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [StudentDetailsService]
})
export class EditComponent {
  studentDetailsUpdatedForm!: FormGroup;
  selectedStudent: any;
  studentId: any;
  updates: any;
  studentValueId: any;

  constructor(private fb: FormBuilder,
    private studentServiceDetails: StudentDetailsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.studentDetailsUpdatedForm = this.fb.group({
      studentId: [{ value: '', disabled: true }],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.activatedRoute.params.subscribe(studentDetailsId => {
      this.studentId = studentDetailsId['id'];
      console.log(this.studentId);
    }, err => {
      console.log('Cant able to fetch StudentId' + err);
    });

    this.getStudentData();
  }

  getStudentData() {
    this.studentServiceDetails.getStudentDetailsById(this.studentId).subscribe(studentData => {
      this.selectedStudent = studentData;
      if (this.selectedStudent) {
        this.studentDetailsUpdatedForm.patchValue({
          studentId: this.selectedStudent._id,
          firstName: this.selectedStudent.firstName,
          lastName: this.selectedStudent.lastName,
          age: this.selectedStudent.age,
          email: this.selectedStudent.email
        });
      };
    });

  }

  updateStudentDetails(): void {
    if (this.studentDetailsUpdatedForm.valid) {
      const updates = this.studentDetailsUpdatedForm.value;
      const studentId = this.selectedStudent._id;
      this.studentServiceDetails.updateStudentDetailsById(studentId, updates).subscribe(
        () => {
          console.log('Student updated successfully');
          this.router.navigateByUrl('/view');
        },
        error => {
          console.error('Error updating student:', error);
        }
      );
    }
  }

}
