import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusShellNavComponent } from './shell-nav.component';

describe('RhombusShellNavComponent', () => {
  let component: RhombusShellNavComponent;
  let fixture: ComponentFixture<RhombusShellNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusShellNavComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusShellNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
