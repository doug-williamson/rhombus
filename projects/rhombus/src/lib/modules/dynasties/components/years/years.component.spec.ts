import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastyYearsComponent } from './years.component';

describe('RhDynastyYearsComponent', () => {
  let component: RhDynastyYearsComponent;
  let fixture: ComponentFixture<RhDynastyYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastyYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastyYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
