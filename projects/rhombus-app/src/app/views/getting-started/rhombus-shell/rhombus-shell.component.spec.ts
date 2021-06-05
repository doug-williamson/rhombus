import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellComponent } from './rhombus-shell.component';

describe('RhombusShellComponent', () => {
  let component: RhombusShellComponent;
  let fixture: ComponentFixture<RhombusShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhombusShellComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
