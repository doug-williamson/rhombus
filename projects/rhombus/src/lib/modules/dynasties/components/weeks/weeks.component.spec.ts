import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastyWeeksComponent } from './weeks.component';

describe('RhDynastyWeeksComponent', () => {
  let component: RhDynastyWeeksComponent;
  let fixture: ComponentFixture<RhDynastyWeeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastyWeeksComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastyWeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
