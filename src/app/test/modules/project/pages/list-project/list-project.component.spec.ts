import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterService, MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { SuggestionsProjectComponent } from 'src/app/modules/project/components/suggestions-project/suggestions-project.component';
import { ListProjectComponent } from 'src/app/modules/project/pages/list-project/list-project.component';
import { FiltersComponent } from 'src/app/shared/filters/filters.component';
import { Project } from 'src/app/shared/models/project/project.class';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardProjectComponent } from 'src/app/modules/project/components/card-project/card-project.component';
import { mockGetAllProjects, mockGetSuggestedProjects, mockProjectService } from 'src/app/test/__mocks__/services/project/project.service.mock';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { RecommendationsPostModalComponent } from 'src/app/modules/project/shared/recommendations-post-modal/recommendations-post-modal.component';
import { RecommendationsProjectModalComponent } from 'src/app/modules/project/shared/recommendations-project-modal/recommendations-project-modal.component';
import { RecommendationsTechnologiesModalComponent } from 'src/app/modules/project/shared/recommendations-technologies-modal/recommendations-technologies-modal.component';
import { QuestionPreferenceUser } from 'src/app/modules/project/interfaces/questionPreferenceUser.interface';
import { UserService } from 'src/app/api/services/user/user.service';
import { mockUserService, questionUserPost, questionUserProject } from 'src/app/test/__mocks__/services/user/user.service.mock';
import { questionUserTechnologie } from '../../../../__mocks__/services/user/user.service.mock';
import { mockDataService, mockResponseTechnologies } from 'src/app/test/__mocks__/services/data/data.service.mock';
import { DataService } from 'src/app/api/services/data/data.service';

describe('ListProjectComponentConLogin', () => {
  let component: ListProjectComponent;
  let fixture: ComponentFixture<ListProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListProjectComponent,
        SuggestionsProjectComponent,
        FiltersComponent,
        CardProjectComponent,
        RecommendationsPostModalComponent,
        RecommendationsProjectModalComponent,
        RecommendationsTechnologiesModalComponent
      ],
      providers: [MessageService,FilterService,
         { provide: ProjectService, useValue: mockProjectService }
        ,{ provide : UserService, useValue : mockUserService},
        {provide :DataService, useValue: mockDataService}
      ],
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

    localStorage.setItem('user',JSON.stringify(userMock))
    component.currentUser = userMock;
    const getTechnologies = spyOn(mockDataService, 'getTechnologies');
    getTechnologies.and.returnValue(of<any>(mockResponseTechnologies));
  });

  it("al iniciar el componente con ngOnInit se active : getQuestion() : y que se devuelva la sugerencia de tipo proyecto",()=>{
    component.currentUser = userMock;
    const getRecommendationQuestionUser = spyOn(mockUserService, 'getRecommendationQuestionUser');
    getRecommendationQuestionUser.and.returnValue(of<any>(questionUserProject));
    component.ngOnInit();
    expect(mockUserService.getRecommendationQuestionUser).toHaveBeenCalled();
    component.spinner = false;
    expect(component.recommendationsQuestionUser.result.results).toHaveSize(1)
  })

  it("al iniciar el componente con ngOnInit se active : getQuestion() : y que se devuelva la sugerencia de tipo post",()=>{
    component.currentUser = userMock;
    const getRecommendationQuestionUser = spyOn(mockUserService, 'getRecommendationQuestionUser');
    getRecommendationQuestionUser.and.returnValue(of<any>(questionUserPost));
    component.ngOnInit();
    expect(mockUserService.getRecommendationQuestionUser).toHaveBeenCalled();
    component.spinner = false;
    expect(component.recommendationsQuestionUser.result.results).toHaveSize(2)
  })

 it("al iniciar el componente con ngOnInit se active : getQuestion() : y que se devuelva la sugerencia de tipo technologie",()=>{
    component.currentUser = userMock;
    const getRecommendationQuestionUser = spyOn(mockUserService, 'getRecommendationQuestionUser');
    getRecommendationQuestionUser.and.returnValue(of<any>(questionUserTechnologie));
    component.ngOnInit();
    expect(mockUserService.getRecommendationQuestionUser).toHaveBeenCalled();
    component.spinner = false;
    expect(component.recommendationsQuestionUser.result.technologie).toEqual('React')
  })

  afterEach(() => {
    localStorage.removeItem("user");
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ListProjectComponentSinLogin', () => {
  let component: ListProjectComponent;
  let fixture: ComponentFixture<ListProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ListProjectComponent,
        SuggestionsProjectComponent,
        FiltersComponent,
        CardProjectComponent,
        RecommendationsPostModalComponent,
        RecommendationsProjectModalComponent,
        RecommendationsTechnologiesModalComponent
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
    getAllProjects.and.returnValue(of<any[]>(mockGetAllProjects));
    component.ngOnInit();
    expect(mockProjectService.getAllProjects).toHaveBeenCalled();
    component.spinner = false;
    expect(component.listProject).toHaveSize(3)
  });
  it('al iniciar el componente con ngOnInit se active : getSuggestedProjects() ', () => {
    const getSuggestedProjects = spyOn(mockProjectService, 'getSuggestedProjects');
    getSuggestedProjects.and.returnValue(of<any[]>(mockGetSuggestedProjects));
    component.ngOnInit();
    expect(mockProjectService.getSuggestedProjects).toHaveBeenCalled();
    expect(component.suggestionsProject).toHaveSize(3)

  });
});
