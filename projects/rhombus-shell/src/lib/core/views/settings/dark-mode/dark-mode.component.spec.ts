import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RhShellDarkModeComponent } from './dark-mode.component';

describe('RhShellDarkModeComponent', () => {
  let component: RhShellDarkModeComponent;
  let fixture: ComponentFixture<RhShellDarkModeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RhShellDarkModeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
