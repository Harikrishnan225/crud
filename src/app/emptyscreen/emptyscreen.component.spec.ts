import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyscreenComponent } from './emptyscreen.component';

describe('EmptyscreenComponent', () => {
  let component: EmptyscreenComponent;
  let fixture: ComponentFixture<EmptyscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmptyscreenComponent]
    });
    fixture = TestBed.createComponent(EmptyscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
