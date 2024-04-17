import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteacherssqlComponent } from './addteacherssql.component';

describe('AddteacherssqlComponent', () => {
  let component: AddteacherssqlComponent;
  let fixture: ComponentFixture<AddteacherssqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddteacherssqlComponent]
    });
    fixture = TestBed.createComponent(AddteacherssqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
