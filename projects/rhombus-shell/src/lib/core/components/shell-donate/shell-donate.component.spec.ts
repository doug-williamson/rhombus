import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellDonateComponent } from './shell-donate.component';

describe('RhombusShellDonateComponent', () => {
  let component: RhombusShellDonateComponent;
  let fixture: ComponentFixture<RhombusShellDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusShellDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
