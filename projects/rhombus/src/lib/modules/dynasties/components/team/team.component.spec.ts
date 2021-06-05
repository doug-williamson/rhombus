import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhDynastyTeamComponent } from './team.component';

describe('RhDynastyTeamComponent', () => {
  let component: RhDynastyTeamComponent;
  let fixture: ComponentFixture<RhDynastyTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhDynastyTeamComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhDynastyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
