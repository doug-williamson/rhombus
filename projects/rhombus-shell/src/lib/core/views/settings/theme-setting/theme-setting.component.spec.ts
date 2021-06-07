import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RhShellThemeSettingComponent } from './theme-setting.component';

describe('RhShellThemeSettingComponent', () => {
  let component: RhShellThemeSettingComponent;
  let fixture: ComponentFixture<RhShellThemeSettingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RhShellThemeSettingComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellThemeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
