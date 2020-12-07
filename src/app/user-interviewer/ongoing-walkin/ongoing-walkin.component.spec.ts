import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingWalkinComponent } from './ongoing-walkin.component';

describe('OngoingWalkinComponent', () => {
  let component: OngoingWalkinComponent;
  let fixture: ComponentFixture<OngoingWalkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingWalkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingWalkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
