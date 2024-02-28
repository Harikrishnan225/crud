import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-teacheredit',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './teacheredit.component.html',
  styleUrls: ['./teacheredit.component.scss'],
  providers: [TeachersService]
})
export class TeachereditComponent {
  teachersDetailsUpdatedForm!: FormGroup;
  selectedTeachers: any;
  teachersId: any;
  updates: any;
  teacherValueId: any;

  constructor(private fb: FormBuilder,
    private teachersService: TeachersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.teachersDetailsUpdatedForm = this.fb.group({
      teachersId: [{ value: '', disabled: true }],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      standard: ['', Validators.required]
    });
    this.activatedRoute.params.subscribe(teacherDetailsId => {
      this.teachersId = teacherDetailsId['id'];
      console.log(this.teachersId);
    }, err => {
      console.log('Cant able to fetch teachersId' + err);
    });

    this.getteachersData();
  }

  getteachersData() {
    this.teachersService.getTeachersDataById(this.teachersId).subscribe(teachersData => {
      this.selectedTeachers = teachersData;
      if (this.selectedTeachers) {
        this.teachersDetailsUpdatedForm.patchValue({
          teachersId: this.selectedTeachers._id,
          firstName: this.selectedTeachers.firstName,
          lastName: this.selectedTeachers.lastName,
          age: this.selectedTeachers.age,
          email: this.selectedTeachers.email,
          standard: this.selectedTeachers._id
        });
      };
    });

  }

  updateteacherDetails(): void {
    if (this.teachersDetailsUpdatedForm.valid) {
      const updates = this.teachersDetailsUpdatedForm.value;
      const teachersId = this.selectedTeachers._id;
      this.teachersService.updateTeachersDataId(teachersId, updates).subscribe(
        () => {
          console.log('Teacher updated successfully');
          this.router.navigateByUrl('/teachers');
        },
        error => {
          console.error('Error updating teachers:', error);
        }
      );
    }
  }
}
