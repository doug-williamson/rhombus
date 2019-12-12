import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellThemeRootComponent } from './theme-root.component';

describe('RhombusShellThemeRootComponent', () => {
  let component: RhombusShellThemeRootComponent;
  let fixture: ComponentFixture<RhombusShellThemeRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusShellThemeRootComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellThemeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
