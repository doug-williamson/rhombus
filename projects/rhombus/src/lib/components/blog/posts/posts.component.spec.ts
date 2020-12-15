import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhBlogPostsComponent } from './posts.component';

describe('RhBlogPostsComponent', () => {
  let component: RhBlogPostsComponent;
  let fixture: ComponentFixture<RhBlogPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhBlogPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
