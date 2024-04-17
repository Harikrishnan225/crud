import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditteacherssqlComponent } from './editteacherssql.component';

describe('EditteacherssqlComponent', () => {
  let component: EditteacherssqlComponent;
  let fixture: ComponentFixture<EditteacherssqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditteacherssqlComponent]
    });
    fixture = TestBed.createComponent(EditteacherssqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
