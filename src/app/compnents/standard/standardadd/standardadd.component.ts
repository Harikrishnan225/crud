import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StandardService } from 'src/app/services/standard/standard.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-standardadd',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './standardadd.component.html',
  styleUrls: ['./standardadd.component.scss']
})
export class StandardaddComponent implements OnInit {

  standardAddingForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private standardService: StandardService,
    private location: Location,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.standardAddingForm = this.fb.group({
      standard: ['', Validators.required]
    })
  }
  
  standardFormSubmit() {
    if (this.standardAddingForm.valid) {
      this.standardService.addStandard(this.standardAddingForm.value).subscribe(
        () => {
          this.toaster.success('Standard added Successfully');
          this.location.back();
        }, (err) => {
          this.toaster.error('Cant able to add standard' + err);
        })
    }
  }
}
