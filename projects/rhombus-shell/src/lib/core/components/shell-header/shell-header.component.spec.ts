import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellHeaderComponent } from './shell-header.component';

describe('RhombusShellHeaderComponent', () => {
  let component: RhombusShellHeaderComponent;
  let fixture: ComponentFixture<RhombusShellHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusShellHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
