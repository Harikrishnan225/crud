import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { StudentDetailsService } from '../services/students/student-details.service';
import { ToasterService } from '../services/toaster/toaster.service';

@Component({
  selector: 'app-studentdetails',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
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
    this.studentDetailsService.addStudentDetailss(this.studentDetailsForm.value).subscribe((data) => {
      console.log(data);      
      this.toaster.success('Student Details Successfull')
    })
  }

}
