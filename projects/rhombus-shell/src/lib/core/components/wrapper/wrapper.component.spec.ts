import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhShellWrapperComponent } from './wrapper.component';

describe('RhShellWrapperComponent', () => {
  let component: RhShellWrapperComponent;
  let fixture: ComponentFixture<RhShellWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhShellWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
