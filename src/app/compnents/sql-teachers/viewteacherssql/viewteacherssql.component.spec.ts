import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteacherssqlComponent } from './viewteacherssql.component';

describe('ViewteacherssqlComponent', () => {
  let component: ViewteacherssqlComponent;
  let fixture: ComponentFixture<ViewteacherssqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ViewteacherssqlComponent]
    });
    fixture = TestBed.createComponent(ViewteacherssqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
