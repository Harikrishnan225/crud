import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardaddComponent } from './standardadd.component';

describe('StandardaddComponent', () => {
  let component: StandardaddComponent;
  let fixture: ComponentFixture<StandardaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandardaddComponent]
    });
    fixture = TestBed.createComponent(StandardaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
