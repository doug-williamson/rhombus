import { async, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RhAppComponent } from './app.component';

describe('RhAppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        RhAppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RhAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rhombus-app'`, () => {
    const fixture = TestBed.createComponent(RhAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rhombus-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RhAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('rhombus-app app is running!');
  });
});
