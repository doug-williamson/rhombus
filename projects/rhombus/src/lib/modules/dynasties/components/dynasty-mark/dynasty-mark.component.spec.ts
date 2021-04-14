import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastyMarkComponent } from './dynasty-mark.component';

describe('RhDynastyMarkComponent', () => {
  let component: RhDynastyMarkComponent;
  let fixture: ComponentFixture<RhDynastyMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastyMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastyMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
