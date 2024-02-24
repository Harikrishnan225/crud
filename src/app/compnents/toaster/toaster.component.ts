import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {

  constructor(
    private toastr:ToastrService
  ){}

  ngOnInit(): void{

  }


  showToasterSuccess(){
    this.toastr.success();
  }
}
