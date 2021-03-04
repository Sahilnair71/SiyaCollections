import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularCardsComponent } from './circular-cards.component';

describe('CircularCardsComponent', () => {
  let component: CircularCardsComponent;
  let fixture: ComponentFixture<CircularCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
