import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqviewstandardComponent } from './seqviewstandard.component';

describe('SeqviewstandardComponent', () => {
  let component: SeqviewstandardComponent;
  let fixture: ComponentFixture<SeqviewstandardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeqviewstandardComponent]
    });
    fixture = TestBed.createComponent(SeqviewstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
