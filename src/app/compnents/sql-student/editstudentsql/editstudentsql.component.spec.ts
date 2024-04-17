import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstudentsqlComponent } from './editstudentsql.component';

describe('EditstudentsqlComponent', () => {
  let component: EditstudentsqlComponent;
  let fixture: ComponentFixture<EditstudentsqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditstudentsqlComponent]
    });
    fixture = TestBed.createComponent(EditstudentsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
