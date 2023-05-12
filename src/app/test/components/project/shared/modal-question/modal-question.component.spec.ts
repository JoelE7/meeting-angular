import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuestionComponent } from '../../../../../components/project/shared/question-modal/modal-question.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('ModalQuestionComponent', () => {
  let component: ModalQuestionComponent;
  let fixture: ComponentFixture<ModalQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalQuestionComponent ],
      providers : [],
      imports : [PrimengModule]
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
