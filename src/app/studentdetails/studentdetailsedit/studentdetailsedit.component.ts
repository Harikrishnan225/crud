import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentdetailsedit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './studentdetailsedit.component.html',
  styleUrls: ['./studentdetailsedit.component.scss']
})
export class StudentdetailseditComponent implements OnInit {
  studentDetailsEditForm!: FormGroup;

ngOnInit(): void {
  
}

editStudentDetails(){
  
}

}
