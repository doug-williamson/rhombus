import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellWrapperComponent } from './shell-wrapper.component';

describe('RhombusShellWrapperComponent', () => {
  let component: RhombusShellWrapperComponent;
  let fixture: ComponentFixture<RhombusShellWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusShellWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
