import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [StudentDetailsService]
})
export class AddComponent {
  studentAddingForm!: FormGroup;
  students: any[] = [];
  dropDownData: any;

  constructor(private fb: FormBuilder,
    private studentService: StudentDetailsService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.studentAddingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(3)
      ]
      ],
      email: ['', [Validators.required, Validators.email]],
      standard: ['', Validators.required]
    });
  }


  userCreatingSubmit(): void {
    if (this.studentAddingForm.valid) {
      console.log(this.studentAddingForm.value);
      this.studentService.addStudentDetails(this.studentAddingForm.value).subscribe({
        next: (value) => {
          console.log('Student added successfully');
          this._location.back();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
        }
      });
    }
  }

  dropDownStandard(): void {
    this.studentService.getStandards().subscribe(result => {
      console.log(result);
      this.dropDownData = result;
      console.log(this.dropDownData);

    }, err => {
      console.log(err);

    })
  }
}
