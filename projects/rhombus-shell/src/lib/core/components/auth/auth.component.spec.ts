import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellAuthComponent } from './auth.component';

describe('RhombusShellAuthComponent', () => {
  let component: RhombusShellAuthComponent;
  let fixture: ComponentFixture<RhombusShellAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhombusShellAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
