import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardeditComponent } from './standardedit.component';

describe('StandardeditComponent', () => {
  let component: StandardeditComponent;
  let fixture: ComponentFixture<StandardeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandardeditComponent]
    });
    fixture = TestBed.createComponent(StandardeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
