import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RhombusAppComponent } from './app.component';

describe('RhombusAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        RhombusAppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RhombusAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rhombus-app'`, () => {
    const fixture = TestBed.createComponent(RhombusAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rhombus-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RhombusAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('rhombus-app app is running!');
  });
});
