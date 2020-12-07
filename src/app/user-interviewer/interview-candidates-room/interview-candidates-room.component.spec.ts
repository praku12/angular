import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCandidatesRoomComponent } from './interview-candidates-room.component';

describe('InterviewCandidatesRoomComponent', () => {
  let component: InterviewCandidatesRoomComponent;
  let fixture: ComponentFixture<InterviewCandidatesRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewCandidatesRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewCandidatesRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
