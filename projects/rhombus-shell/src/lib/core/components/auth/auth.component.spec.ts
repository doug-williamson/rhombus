import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhShellAuthComponent } from './auth.component';

describe('RhShellAuthComponent', () => {
  let component: RhShellAuthComponent;
  let fixture: ComponentFixture<RhShellAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhShellAuthComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
