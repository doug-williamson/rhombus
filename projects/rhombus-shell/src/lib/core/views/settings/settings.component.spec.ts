import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RhShellSettingsComponent } from './settings.component';

describe('RhShellSettingsComponent', () => {
  let component: RhShellSettingsComponent;
  let fixture: ComponentFixture<RhShellSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RhShellSettingsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
