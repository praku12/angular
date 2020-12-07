import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalInterviewDetailsComponent } from './technical-interview-details.component';

describe('TechnicalInterviewDetailsComponent', () => {
  let component: TechnicalInterviewDetailsComponent;
  let fixture: ComponentFixture<TechnicalInterviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalInterviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalInterviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
