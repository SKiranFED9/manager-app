import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAllPostsComponent } from './manage-all-posts.component';

describe('ManageAllPostsComponent', () => {
  let component: ManageAllPostsComponent;
  let fixture: ComponentFixture<ManageAllPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAllPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
