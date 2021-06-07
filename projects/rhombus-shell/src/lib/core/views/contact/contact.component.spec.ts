import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhShellContactComponent } from './contact.component';

describe('RhShellContactComponent', () => {
  let component: RhShellContactComponent;
  let fixture: ComponentFixture<RhShellContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhShellContactComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhShellContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
