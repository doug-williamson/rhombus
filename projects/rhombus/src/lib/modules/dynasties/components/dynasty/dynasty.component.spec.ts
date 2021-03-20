import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastyComponent } from './dynasty.component';

describe('RhDynastyComponent', () => {
  let component: RhDynastyComponent;
  let fixture: ComponentFixture<RhDynastyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
