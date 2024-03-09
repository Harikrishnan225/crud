import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDetailsService } from '../../services/students/student-details.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [StudentDetailsService, ToasterService]
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
    private activatedRoute: ActivatedRoute,
    private toaster: ToasterService
  ) { }

  ngOnInit() {
    this.studentDetailsUpdatedForm = this.fb.group({
      studentId: [{ value: '', disabled: true }],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(2)]],
      email: ['', [Validators.required, Validators.email]],
      standard: ['', Validators.required]
    });
    this.activatedRoute.params.subscribe(studentDetailsId => {
      this.studentId = studentDetailsId['id'];
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
          email: this.selectedStudent.email,
          standard: this.selectedStudent._id
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
          this.toaster.success('Student updated successfully');
          this.router.navigateByUrl('/students');
        },
        error => {
          this.toaster.error('Error updating student:' + error);
        }
      );
    }
  }

}
