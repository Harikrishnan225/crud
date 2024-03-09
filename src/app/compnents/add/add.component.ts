import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentDetailsService } from 'src/app/services/students/student-details.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [StudentDetailsService, ToasterService]
})
export class AddComponent {
  studentAddingForm!: FormGroup;
  students: any[] = [];
  dropDownData: any;

  constructor(private fb: FormBuilder,
    private studentService: StudentDetailsService,
    private _location: Location,
    private toaster: ToasterService
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
      password: ['', Validators.required],
      standard: ['', Validators.required]
    });

    this.studentService.getStandards().subscribe(result => {
      this.dropDownData = result;
    }, err => {
      console.log(err);

    });
  }


  userCreatingSubmit(): void {
    if (this.studentAddingForm.valid) {
      console.log(this.studentAddingForm.value);
      this.studentService.addStudentDetails(this.studentAddingForm.value).subscribe({
        next: (value) => {
          this.toaster.success('Student added successfully');
          this._location.back();
        },
        error: (error) => {
          this.toaster.error('Error submitting form:' + error);
        }
      });
    }
  }


}
