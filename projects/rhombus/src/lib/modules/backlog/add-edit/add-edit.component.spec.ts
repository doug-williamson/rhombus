import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhBacklogAddEditComponent } from './add-edit.component';

describe('RhBacklogAddEditComponent', () => {
  let component: RhBacklogAddEditComponent;
  let fixture: ComponentFixture<RhBacklogAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhBacklogAddEditComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhBacklogAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
