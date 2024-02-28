import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StandardService } from 'src/app/services/standard/standard.service';

@Component({
  selector: 'app-standardadd',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './standardadd.component.html',
  styleUrls: ['./standardadd.component.scss'],
  providers: [StandardService]
})
export class StandardaddComponent implements OnInit {

  standardAddingForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private standardService: StandardService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.standardAddingForm = this.fb.group({
      standard: ['', Validators.required]
    })
  }
  standardFormSubmit() {
    if (this.standardAddingForm.valid) {
      this.standardService.addStandard(this.standardAddingForm.value).subscribe({
        next: (value) => {
          console.log('Standard added Successfully');
          this.location.back();
        }, error(err) {
          console.log('Cant able to add standard' + err);
        }
      })
    }
  }
}
