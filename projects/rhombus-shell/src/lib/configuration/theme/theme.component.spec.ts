import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellThemeComponent } from './theme.component';

describe('RhombusShellThemeComponent', () => {
  let component: RhombusShellThemeComponent;
  let fixture: ComponentFixture<RhombusShellThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusShellThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
