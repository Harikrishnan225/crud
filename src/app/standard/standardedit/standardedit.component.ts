import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StandardService } from 'src/app/services/standard/standard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-standardedit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './standardedit.component.html'
})
export class StandardeditComponent implements OnInit {
  standardDetailsUpdatedForm!: FormGroup;
  standardId: any;
  standardData: any;

  constructor(
    private fb: FormBuilder,
    private standardService: StandardService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.standardDetailsUpdatedForm = this.fb.group({
      standardId: ['', Validators.required],
      standard: ['', Validators.required]
    });
    this.activatedRoute.params.subscribe(standardId => {
      this.standardId = standardId['id'];
    }, err => {
      this.toaster.error(err);
    });

    this.getStandardData();
  }

  getStandardData() {
    this.standardService.getStandardByUniqueId(this.standardId).subscribe(standardUniqueData => {
      this.standardData = standardUniqueData;
      if (this.standardData) {
        this.standardDetailsUpdatedForm.patchValue({
          standardId: this.standardData._id,
          standard: this.standardData.standard,
        })
      }
    })
  }

  updatestandardDetails() {
    if (this.standardDetailsUpdatedForm.valid) {
      const standardUpdate = this.standardDetailsUpdatedForm.value;
      const standardId = this.standardData._id;
      this.standardService.updatedStandard(standardId, standardUpdate).subscribe(
        () => {
          this.toaster.success('Standard Added Successfully');
          this.router.navigateByUrl('/standard');
        }, error => {
          this.toaster.error(error);
        }
      )
    }
  }
}
