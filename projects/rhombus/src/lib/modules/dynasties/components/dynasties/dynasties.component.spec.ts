import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastiesComponent } from './dynasties.component';

describe('RhDynastiesComponent', () => {
  let component: RhDynastiesComponent;
  let fixture: ComponentFixture<RhDynastiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastiesComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
