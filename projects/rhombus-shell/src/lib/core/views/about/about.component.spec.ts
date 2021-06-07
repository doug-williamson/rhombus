import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhShellAboutComponent } from './about.component';

describe('RhShellAboutComponent', () => {
  let component: RhShellAboutComponent;
  let fixture: ComponentFixture<RhShellAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhShellAboutComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
