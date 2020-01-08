import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusWidgetListComponent } from './list.component';

describe('RhombusWidgetListComponent', () => {
  let component: RhombusWidgetListComponent;
  let fixture: ComponentFixture<RhombusWidgetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusWidgetListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusWidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
