import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailsviewComponent } from './studentdetailsview.component';

describe('StudentdetailsviewComponent', () => {
  let component: StudentdetailsviewComponent;
  let fixture: ComponentFixture<StudentdetailsviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StudentdetailsviewComponent]
    });
    fixture = TestBed.createComponent(StudentdetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
