import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalSuggestComponent } from '../../../../modules/post/shared/modal-suggest/modal-suggest.component';
import { MessageService } from 'primeng/api';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';


describe('ModalSuggestComponent', () => {
  let component: ModalSuggestComponent;
  let fixture: ComponentFixture<ModalSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuggestComponent ],
      providers: [MessageService],
      imports: [PrimengModule,HttpClientTestingModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
