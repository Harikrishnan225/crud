import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-teacheredit',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './teacheredit.component.html',
  styleUrls: ['./teacheredit.component.scss']
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
    private activatedRoute: ActivatedRoute,
    private toaster: ToasterService
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
    }, err => {
     this.toaster.error('Cant able to fetch teachersId' + err);
    });

    this.getteachersData();
  }

  getteachersData() {
    this.teachersService.getTeachersDataById(this.teachersId).subscribe(teachersData => {
      this.selectedTeachers = teachersData;
      console.log(teachersData);
      
      if (this.selectedTeachers) {
        this.teachersDetailsUpdatedForm.patchValue({
          teachersId: this.selectedTeachers._id,
          firstName: this.selectedTeachers.firstName,
          lastName: this.selectedTeachers.lastName,
          age: this.selectedTeachers.age,
          email: this.selectedTeachers.email,
          standard: this.selectedTeachers.standard
        });
      };
    });

  }

  updateteacherDetails(): void {
    if (this.teachersDetailsUpdatedForm.valid) {
      const updatedValue = this.teachersDetailsUpdatedForm.value;
      console.log(updatedValue);
      
      const teachersId = this.selectedTeachers._id;
      this.teachersService.updateTeachersDataId(teachersId, updatedValue).subscribe(
        () => {
          this.toaster.success('Teacher updated successfully');
          this.router.navigateByUrl('/teachers');
        },
        error => {
          this.toaster.error('Error updating teachers:' + error);
        }
      );
    }
  }
}
