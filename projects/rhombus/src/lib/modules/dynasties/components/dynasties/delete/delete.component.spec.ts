import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastiesDeleteComponent } from './delete.component';

describe('RhDynastiesDeleteComponent', () => {
  let component: RhDynastiesDeleteComponent;
  let fixture: ComponentFixture<RhDynastiesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastiesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastiesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
