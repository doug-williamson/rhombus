import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RhShellThemeComponent } from './theme.component';

describe('RhShellThemeComponent', () => {
  let component: RhShellThemeComponent;
  let fixture: ComponentFixture<RhShellThemeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RhShellThemeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
