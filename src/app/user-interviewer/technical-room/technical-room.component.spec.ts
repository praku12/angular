import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalRoomComponent } from './technical-room.component';

describe('TechnicalRoomComponent', () => {
  let component: TechnicalRoomComponent;
  let fixture: ComponentFixture<TechnicalRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
