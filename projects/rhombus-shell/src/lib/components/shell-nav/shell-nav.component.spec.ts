import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellNavComponent } from './shell-nav.component';

describe('ShellNavComponent', () => {
  let component: ShellNavComponent;
  let fixture: ComponentFixture<ShellNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
