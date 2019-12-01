import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellAboutComponent } from './shell-about.component';

describe('ShellAboutComponent', () => {
  let component: ShellAboutComponent;
  let fixture: ComponentFixture<ShellAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
