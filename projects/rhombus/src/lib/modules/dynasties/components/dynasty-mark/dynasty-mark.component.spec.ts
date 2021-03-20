import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynastyMarkComponent } from './dynasty-mark.component';

describe('DynastyMarkComponent', () => {
  let component: DynastyMarkComponent;
  let fixture: ComponentFixture<DynastyMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynastyMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynastyMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
