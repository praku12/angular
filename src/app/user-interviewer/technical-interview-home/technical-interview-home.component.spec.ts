import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalInterviewHomeComponent } from './technical-interview-home.component';

describe('TechnicalInterviewHomeComponent', () => {
  let component: TechnicalInterviewHomeComponent;
  let fixture: ComponentFixture<TechnicalInterviewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalInterviewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalInterviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
