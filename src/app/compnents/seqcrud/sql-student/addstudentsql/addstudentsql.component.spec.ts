import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentsqlComponent } from './addstudentsql.component';

describe('AddstudentsqlComponent', () => {
  let component: AddstudentsqlComponent;
  let fixture: ComponentFixture<AddstudentsqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddstudentsqlComponent]
    });
    fixture = TestBed.createComponent(AddstudentsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
