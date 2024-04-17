import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeqStudentService } from 'src/app/services/seq-student/seq-student.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-addstudentsql',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addstudentsql.component.html',
  styleUrls: ['./addstudentsql.component.scss']
})
export class AddstudentsqlComponent implements OnInit {
  studentAddingSqlForm!: FormGroup;
  dropDownData: any;

  constructor(
    private fb: FormBuilder,
    private studentSeqService: SeqStudentService,
    private toaster: ToasterService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.studentAddingSqlForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      standard: ['', Validators.required]
    });
    this.studentSeqService.getDropDownData().subscribe(res => {
      this.dropDownData = res;
    });
  }

  studentFormSubmit() {
    if (this.studentAddingSqlForm.valid) {
      console.log(this.studentAddingSqlForm.value);
      this.studentSeqService.createStudent(this.studentAddingSqlForm.value).subscribe(() => {
        this.toaster.success('Student Added Successfully');
        this._location.back();
      }, (err: any) => {
        this.toaster.error('Cant not able to add student Data' + err)
      })
    }
  }
}
