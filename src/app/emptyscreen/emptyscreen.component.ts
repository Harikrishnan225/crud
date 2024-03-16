import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const urlMap = {
  student: "/assets/studentempty.avif",
  teacher: "/assets/teacherempty.avif",
  studentDetails: "/assets/nostudentdetails.webp",
  default: "/assets/default.avif"
}

@Component({
  selector: 'app-emptyscreen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emptyscreen.component.html',
  styleUrls: ['./emptyscreen.component.scss']
})
export class EmptyscreenComponent {
  @Input() msg!: string;
  @Input() name: keyof typeof urlMap = 'default';

  images = urlMap;
}