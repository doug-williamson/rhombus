import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhStreamComponent } from './stream.component';

describe('RhStreamComponent', () => {
  let component: RhStreamComponent;
  let fixture: ComponentFixture<RhStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
