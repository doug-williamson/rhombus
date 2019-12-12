import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellAboutComponent } from './shell-about.component';

describe('RhombusShellAboutComponent', () => {
  let component: RhombusShellAboutComponent;
  let fixture: ComponentFixture<RhombusShellAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusShellAboutComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
