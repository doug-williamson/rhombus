import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhAppBlogComponent } from './blog.component';

describe('RhAppBlogComponent', () => {
  let component: RhAppBlogComponent;
  let fixture: ComponentFixture<RhAppBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhAppBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhAppBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
