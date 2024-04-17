import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { SeqstandardService } from 'src/app/services/seqstandard/seqstandard.service';

@Component({
  selector: 'app-seqaddstandard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './seqaddstandard.component.html',
  styleUrls: ['./seqaddstandard.component.scss']
})
export class SeqaddstandardComponent implements OnInit {
  standardSeqAddingForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private standardService: SeqstandardService,
    private _location: Location,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.standardSeqAddingForm = this.fb.group({
      standard: ['', Validators.required]
    })
  }

  standardFormSubmit() {
      this.standardService.createStandard(this.standardSeqAddingForm.value).subscribe(() => {
        this.toaster.success('Standard Added Successfully');
        this._location.back();
      }, err => {
        this.toaster.error('Cant able to add Standard' + err);
      })
  }
}
