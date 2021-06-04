import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastiesAddEditComponent } from './add-edit.component';

describe('RhDynastiesAddEditComponent', () => {
  let component: RhDynastiesAddEditComponent;
  let fixture: ComponentFixture<RhDynastiesAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastiesAddEditComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastiesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
