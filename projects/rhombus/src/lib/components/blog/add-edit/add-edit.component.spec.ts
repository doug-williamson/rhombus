import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhBlogAddEditComponent } from './add-edit.component';

describe('RhBlogAddEditComponent', () => {
  let component: RhBlogAddEditComponent;
  let fixture: ComponentFixture<RhBlogAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhBlogAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhBlogAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
