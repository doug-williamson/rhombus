import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynastiesComponent } from './dynasties.component';

describe('DynastiesComponent', () => {
  let component: DynastiesComponent;
  let fixture: ComponentFixture<DynastiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynastiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynastiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
