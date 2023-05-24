import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterService, MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { SuggestionsProjectComponent } from 'src/app/modules/project/components/suggestions-project/suggestions-project.component';
import { ListProjectComponent } from 'src/app/modules/project/pages/list-project/list-project.component';
import { ModalQuestionComponent } from 'src/app/modules/project/shared/question-modal/modal-question.component';
import { FiltersComponent } from 'src/app/shared/filters/filters.component';
import { Project } from 'src/app/shared/models/project/project.class';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardProjectComponent } from 'src/app/modules/project/components/card-project/card-project.component';
import { mockGetAllProjects, mockGetSuggestedProjects, mockProjectService } from 'src/app/test/__mocks__/services/project/project.service.mock';

describe('ListProjectComponent', () => {
  let component: ListProjectComponent;
  let fixture: ComponentFixture<ListProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListProjectComponent,
        SuggestionsProjectComponent,
        ModalQuestionComponent,
        FiltersComponent,
        CardProjectComponent
      ],
      providers: [MessageService,FilterService, { provide: ProjectService, useValue: mockProjectService },],
      imports: [
        SharedModule,
        PrimengModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('al iniciar el componente con ngOnInit se active : getAllProjects() ', () => {
    const getAllProjects = spyOn(mockProjectService, 'getAllProjects');
    getAllProjects.and.returnValue(of<Project[]>(mockGetAllProjects));
    component.ngOnInit();
    expect(mockProjectService.getAllProjects).toHaveBeenCalled();
    component.spinner = false;
    expect(component.listProject).toHaveSize(2)
  });
  it('al iniciar el componente con ngOnInit se active : getSuggestedProjects() ', () => {
    const getSuggestedProjects = spyOn(mockProjectService, 'getSuggestedProjects');
    getSuggestedProjects.and.returnValue(of<any[]>(mockGetSuggestedProjects));
    component.ngOnInit();
    expect(mockProjectService.getSuggestedProjects).toHaveBeenCalled();
    expect(component.suggestionsProject).toHaveSize(3)

  });
});
