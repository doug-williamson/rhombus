import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusWidgetGridComponent } from './grid.component';

describe('RhombusWidgetGridComponent', () => {
  let component: RhombusWidgetGridComponent;
  let fixture: ComponentFixture<RhombusWidgetGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusWidgetGridComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusWidgetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
