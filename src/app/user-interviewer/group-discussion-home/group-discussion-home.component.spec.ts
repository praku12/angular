import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDiscussionHomeComponent } from './group-discussion-home.component';

describe('GroupDiscussionHomeComponent', () => {
  let component: GroupDiscussionHomeComponent;
  let fixture: ComponentFixture<GroupDiscussionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDiscussionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDiscussionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
