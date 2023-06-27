import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalScoreComponent } from 'src/app/modules/project/shared/modal-score/modal-score.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('ModalScoreComponent', () => {
  let component: ModalScoreComponent;
  let fixture: ComponentFixture<ModalScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalScoreComponent ],
      providers : [],
      imports : [PrimengModule,ReactiveFormsModule,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
