import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastyMarkYearWeekAddEditComponent } from './add-edit.component';

describe('RhDynastyMarkYearWeekAddEditComponent', () => {
  let component: RhDynastyMarkYearWeekAddEditComponent;
  let fixture: ComponentFixture<RhDynastyMarkYearWeekAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastyMarkYearWeekAddEditComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastyMarkYearWeekAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
