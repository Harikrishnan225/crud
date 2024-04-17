import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqaddstandardComponent } from './seqaddstandard.component';

describe('SeqaddstandardComponent', () => {
  let component: SeqaddstandardComponent;
  let fixture: ComponentFixture<SeqaddstandardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeqaddstandardComponent]
    });
    fixture = TestBed.createComponent(SeqaddstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
