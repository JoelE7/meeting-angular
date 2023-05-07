import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuestionComponent } from '../../../../../components/project/shared/question-modal/modal-question.component';

describe('ModalQuestionComponent', () => {
  let component: ModalQuestionComponent;
  let fixture: ComponentFixture<ModalQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
