import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColsetEssentialsComponent } from './colset-essentials.component';

describe('ColsetEssentialsComponent', () => {
  let component: ColsetEssentialsComponent;
  let fixture: ComponentFixture<ColsetEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColsetEssentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColsetEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
