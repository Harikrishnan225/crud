import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [StudentDetailsService]
})
export class EditComponent {
  myForm!: FormGroup;
  selectedStudent: any;
  studentId: any;
  updates: any;

  constructor(private fb: FormBuilder,
    private studentDetails: StudentDetailsService,
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      studentId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.sharedService.selectedStudent$.subscribe((student) => {
      this.selectedStudent = student;
      if (this.selectedStudent) {
        this.myForm.patchValue({
          studentId: this.selectedStudent._id,
          firstName: this.selectedStudent.firstName,
          lastName: this.selectedStudent.lastName,
          age: this.selectedStudent.age,
          email: this.selectedStudent.email
        });
      }
    });
  }


  updateStudent(): void {
    if (this.myForm.valid) {
      const updates = this.myForm.value;
      const studentId = this.selectedStudent._id; 
      this.studentDetails.updateStudent(studentId, updates).subscribe(
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
