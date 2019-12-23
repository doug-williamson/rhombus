import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellSettingsComponent } from './settings.component';

describe('RhombusShellSettingsComponent', () => {
  let component: RhombusShellSettingsComponent;
  let fixture: ComponentFixture<RhombusShellSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusShellSettingsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
