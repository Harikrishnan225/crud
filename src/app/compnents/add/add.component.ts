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
  myForm!: FormGroup;
  students: any[] = [];

  constructor(private fb: FormBuilder,
    private studentService: StudentDetailsService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
        Validators.pattern(/^\d+$/),
      ]
    ],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);

      this.studentService.addStudent(this.myForm.value).subscribe({
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
}
