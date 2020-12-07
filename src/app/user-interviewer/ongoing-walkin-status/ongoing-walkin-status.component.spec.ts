import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingWalkinStatusComponent } from './ongoing-walkin-status.component';

describe('OngoingWalkinStatusComponent', () => {
  let component: OngoingWalkinStatusComponent;
  let fixture: ComponentFixture<OngoingWalkinStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingWalkinStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingWalkinStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
