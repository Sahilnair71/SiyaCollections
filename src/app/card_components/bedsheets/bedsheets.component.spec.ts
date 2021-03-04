import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedsheetsComponent } from './bedsheets.component';

describe('BedsheetsComponent', () => {
  let component: BedsheetsComponent;
  let fixture: ComponentFixture<BedsheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedsheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
