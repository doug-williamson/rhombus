import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhShellDonateComponent } from './donate.component';

describe('RhShellDonateComponent', () => {
  let component: RhShellDonateComponent;
  let fixture: ComponentFixture<RhShellDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhShellDonateComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
