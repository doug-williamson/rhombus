import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhLoginComponent } from './login.component';

describe('RhLoginComponent', () => {
  let component: RhLoginComponent;
  let fixture: ComponentFixture<RhLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhLoginComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
