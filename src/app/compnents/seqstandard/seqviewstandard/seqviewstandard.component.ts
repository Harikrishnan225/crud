import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SeqstandardService } from 'src/app/services/seqstandard/seqstandard.service';

@Component({
  selector: 'app-seqviewstandard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seqviewstandard.component.html',
  styleUrls: ['./seqviewstandard.component.scss']
})
export class SeqviewstandardComponent implements OnInit {
  standard: any;
  standardDetails: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private seqStandardService: SeqstandardService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(resId => {
      this.standard = resId;
    });
    this.seqStandardService.getStandardById(this.standard.id).subscribe(standardData => {
      this.standardDetails = standardData
    })
  }

}
