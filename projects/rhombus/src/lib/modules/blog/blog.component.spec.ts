import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhBlogComponent } from './blog.component';

describe('RhBlogComponent', () => {
  let component: RhBlogComponent;
  let fixture: ComponentFixture<RhBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhBlogComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
