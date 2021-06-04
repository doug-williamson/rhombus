import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastyMarkShowAllComponent } from './show-all.component';

describe('RhDynastyMarkShowAllComponent', () => {
  let component: RhDynastyMarkShowAllComponent;
  let fixture: ComponentFixture<RhDynastyMarkShowAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastyMarkShowAllComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastyMarkShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
