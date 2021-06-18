import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhExperienceComponent } from './experience.component';

describe('RhExperienceComponent', () => {
  let component: RhExperienceComponent;
  let fixture: ComponentFixture<RhExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
