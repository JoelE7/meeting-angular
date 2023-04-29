import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSendModalComponent } from './request-send-modal.component';

describe('RequestSendModalComponent', () => {
  let component: RequestSendModalComponent;
  let fixture: ComponentFixture<RequestSendModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestSendModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestSendModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
