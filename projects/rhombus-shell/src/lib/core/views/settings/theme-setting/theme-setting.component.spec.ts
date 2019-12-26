import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellThemeSettingComponent } from './theme-setting.component';

describe('RhombusShellThemeSettingComponent', () => {
  let component: RhombusShellThemeSettingComponent;
  let fixture: ComponentFixture<RhombusShellThemeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusShellThemeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellThemeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
