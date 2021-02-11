import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastyYearComponent } from './year.component';

describe('RhDynastyYearComponent', () => {
  let component: RhDynastyYearComponent;
  let fixture: ComponentFixture<RhDynastyYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastyYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastyYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
