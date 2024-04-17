import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeqeditstandardComponent } from './seqeditstandard.component';

describe('SeqeditstandardComponent', () => {
  let component: SeqeditstandardComponent;
  let fixture: ComponentFixture<SeqeditstandardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeqeditstandardComponent]
    });
    fixture = TestBed.createComponent(SeqeditstandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
