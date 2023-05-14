import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterService, MessageService } from 'primeng/api';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { SuggestionsProjectComponent } from 'src/app/components/project/components/suggestions-project/suggestions-project.component';
import { ListProjectComponent } from 'src/app/components/project/pages/list-project/list-project.component';
import { ModalQuestionComponent } from 'src/app/components/project/shared/question-modal/modal-question.component';
import { FiltersComponent } from 'src/app/shared/filters/filters.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ListProjectComponent', () => {
  let component: ListProjectComponent;
  let fixture: ComponentFixture<ListProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjectComponent,SuggestionsProjectComponent,ModalQuestionComponent,FiltersComponent ],
      providers : [MessageService,ProjectService,FilterService],
      imports : [SharedModule,PrimengModule,HttpClientTestingModule,RouterTestingModule,BrowserAnimationsModule,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
