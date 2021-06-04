import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellContactUsComponent } from './shell-contact-us.component';

describe('ShellContactUsComponent', () => {
  let component: ShellContactUsComponent;
  let fixture: ComponentFixture<ShellContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellContactUsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
