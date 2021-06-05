import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhShellHeaderComponent } from './header.component';

describe('RhShellHeaderComponent', () => {
  let component: RhShellHeaderComponent;
  let fixture: ComponentFixture<RhShellHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhShellHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
