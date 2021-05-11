import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhShellModulesComponent } from './modules.component';

describe('RhShellModulesComponent', () => {
  let component: RhShellModulesComponent;
  let fixture: ComponentFixture<RhShellModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhShellModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
