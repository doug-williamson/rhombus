import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RhShellThemeRootComponent } from './theme-root.component';

describe('RhShellThemeRootComponent', () => {
  let component: RhShellThemeRootComponent;
  let fixture: ComponentFixture<RhShellThemeRootComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RhShellThemeRootComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellThemeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
