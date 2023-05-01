import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAcceptModalComponent } from '../../../../components/project/shared/request-accept-modal/request-accept-modal.component';

describe('RequestAcceptModalComponent', () => {
  let component: RequestAcceptModalComponent;
  let fixture: ComponentFixture<RequestAcceptModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAcceptModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAcceptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
