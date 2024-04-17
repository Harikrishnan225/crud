import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StandardService } from 'src/app/services/standard/standard.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viewdetails',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {
  standard: any;
  standardDetails: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private standardService: StandardService,
    private location: Location
  ) { }

  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe(resId => {
      this.standard = resId;
      console.log(this.standard.id);
    });

    this.standardService.getStandardDetailsById(this.standard.id).subscribe(standardDetails => {
      this.standardDetails = standardDetails;
      // console.log(this.standardDetails[0].students[0].firstName);
    });
  }
}
