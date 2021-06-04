import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhBacklogDeleteComponent } from './delete.component';

describe('RhBacklogDeleteComponent', () => {
  let component: RhBacklogDeleteComponent;
  let fixture: ComponentFixture<RhBacklogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhBacklogDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhBacklogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
