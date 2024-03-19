import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetailsedit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './studentdetailsedit.component.html',
  styleUrls: ['./studentdetailsedit.component.scss']
})
export class StudentdetailseditComponent implements OnInit {
  studentDetailsEditForm!: FormGroup;
  studentDetails: any;
  studentDetailsId: any;

  constructor(
    private fb: FormBuilder,
    private studentDetailsService: StudentDetailsService,
    private activatedRoute: ActivatedRoute,
    private toaster: ToasterService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.studentDetailsEditForm = this.fb.group({
      studentName: [''],
      studentAddress: this.fb.array([])
    })
    this.activatedRoute.params.subscribe(studentId => {
      this.studentDetailsId = studentId["id"];
    }, err => {
      console.log(err);
    })
    this.getStudentDetails()
  }

  getStudentDetails() {
    this.studentDetailsService.getStudentDetailsById(this.studentDetailsId).subscribe((data) => {
      this.studentDetails = data;
      this.studentDetailsEditForm.get('studentName')?.patchValue(this.studentDetails.studentName);
      this.studentDetails.studentAddress.forEach((item: any) => { this.addStudent(item) });
    });
  }

  addStudent(item: any) {
    this.StudentAddress.push(this.fb.group({
      addressField: [item.addressField || ''],
      phoneNumber: [item.phoneNumber || ''],
      pinCode: [item.pinCode || '']
    }))
  }

  newAddress() {
    this.StudentAddress.push(this.fb.group({
      addressField: [''],
      phoneNumber: [''],
      pinCode: ['']
    }))
  }

  get StudentAddress() {
    return this.studentDetailsEditForm.get('studentAddress') as FormArray;
  }

  removeAddress(index: number) {
    this.StudentAddress.removeAt(index);
  }

  editStudentDetails() {
    if (this.studentDetailsEditForm) {
      const studentId = this.studentDetailsId;
      const updatedStudentDetails = this.studentDetailsEditForm.value;
      this.studentDetailsService.updateDetailsById(studentId, updatedStudentDetails).subscribe(() => {
        this.toaster.success("StudentDetails Updated Successfully");
        this.location.back();
      })
    }

  }

}
