import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-studentdetailsadd',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './studentdetailsadd.component.html',
  styleUrls: ['./studentdetailsadd.component.scss']
})
export class StudentdetailsaddComponent implements OnInit {
  studentDetailsForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private studentDetailsService: StudentDetailsService,
    private toaster: ToasterService,
  ) { }

  ngOnInit(): void {
    this.studentDetailsForm = this.fb.group({
      studentName: ['', Validators.required],
      studentAddress: this.fb.array([
        this.fb.group({
          addressField: [''],
          phoneNumber: [''],
          pinCode: ['']
        })
      ])
    })
  }
  get StudentAddress() {
    return this.studentDetailsForm.get('studentAddress') as FormArray;
  }

  addStudent() {
    this.StudentAddress.push(this.fb.group({
      addressField: [''],
      phoneNumber: [''],
      pinCode: ['']
    }))
  }

  addstudentDetails() {
    this.studentDetailsService.addStudentDetails(this.studentDetailsForm.value).subscribe((data) => {
      console.log(data);
      this.toaster.success('Student Details Successfull')
    })
  }

}
