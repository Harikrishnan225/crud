import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentsqlComponent } from './viewstudentsql.component';

describe('ViewstudentsqlComponent', () => {
  let component: ViewstudentsqlComponent;
  let fixture: ComponentFixture<ViewstudentsqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ViewstudentsqlComponent]
    });
    fixture = TestBed.createComponent(ViewstudentsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
