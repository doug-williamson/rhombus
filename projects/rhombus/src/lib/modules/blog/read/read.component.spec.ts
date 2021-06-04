import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhBlogPostComponent } from './read.component';

describe('RhBlogPostComponent', () => {
  let component: RhBlogPostComponent;
  let fixture: ComponentFixture<RhBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhBlogPostComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
