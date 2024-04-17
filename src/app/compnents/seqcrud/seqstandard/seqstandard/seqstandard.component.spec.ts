import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqstandardComponent } from './seqstandard.component';

describe('SeqstandardComponent', () => {
  let component: SeqstandardComponent;
  let fixture: ComponentFixture<SeqstandardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeqstandardComponent]
    });
    fixture = TestBed.createComponent(SeqstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
