import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailseditComponent } from './studentdetailsedit.component';

describe('StudentdetailseditComponent', () => {
  let component: StudentdetailseditComponent;
  let fixture: ComponentFixture<StudentdetailseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StudentdetailseditComponent]
    });
    fixture = TestBed.createComponent(StudentdetailseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
