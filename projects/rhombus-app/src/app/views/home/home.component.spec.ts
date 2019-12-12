import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RhombusAppHomeComponent } from './home.component';

describe('RhombusAppHomeComponent', () => {
  let component: RhombusAppHomeComponent;
  let fixture: ComponentFixture<RhombusAppHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusAppHomeComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusAppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
