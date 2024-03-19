import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailsaddComponent } from './studentdetailsadd.component';

describe('StudentdetailsaddComponent', () => {
  let component: StudentdetailsaddComponent;
  let fixture: ComponentFixture<StudentdetailsaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StudentdetailsaddComponent]
    });
    fixture = TestBed.createComponent(StudentdetailsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
