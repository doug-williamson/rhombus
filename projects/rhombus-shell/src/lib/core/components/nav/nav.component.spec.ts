import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhShellNavComponent } from './nav.component';

describe('RhShellNavComponent', () => {
  let component: RhShellNavComponent;
  let fixture: ComponentFixture<RhShellNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhShellNavComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
