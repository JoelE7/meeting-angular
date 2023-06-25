import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService, SharedModule } from 'primeng/api';
import { of } from 'rxjs';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { DetailsProjectComponent } from 'src/app/modules/project/pages/details-project/details-project.component';
import { BannerComponent } from 'src/app/public/banner/banner.component';
import { ChartBarComponent } from 'src/app/shared/components/chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from 'src/app/shared/components/chart-doughnut/chart-doughnut.component';
import { ChartLineComponent } from 'src/app/shared/components/chart-line/chart-line.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { Project } from 'src/app/shared/models/project/project.class';
import {
  metricProject,
  mockProjectDetails,
  mockProjectService,
} from 'src/app/test/__mocks__/services/project/project.service.mock';
import { ModalScoreComponent } from 'src/app/modules/project/shared/modal-score/modal-score.component';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { ModalInvitationProjectComponent } from 'src/app/modules/project/shared/modal-invitation-project/modal-invitation-project.component';
import { mockProjectDetailsWithRepository } from '../../../../__mocks__/services/project/project.service.mock';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';

describe('DetailsProjectComponentConLogin', () => {
  let component: DetailsProjectComponent;
  let fixture: ComponentFixture<DetailsProjectComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DetailsProjectComponent,
        BannerComponent,
        ChartBarComponent,
        ChartLineComponent,
        ChartDoughnutComponent,
        ModalScoreComponent,
        ModalInvitationProjectComponent,
      ],
      providers: [
        MessageService,
        { provide: ProjectService, useValue: mockProjectService },
        TechnologiesService,
      ],
      imports: [
        BrowserAnimationsModule,
        PrimengModule,
        RouterTestingModule,
        HttpClientTestingModule,
        SharedModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.setItem('user', JSON.stringify(userMock));

  });

  afterEach(() => {
    component.searchProject = undefined
    localStorage.removeItem('user');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('si el proyecto está vinculado a un repo de github o gitlab que se traiga las métricas : getMetricByProject()', () => {
    const detailsProjectAsync = spyOn(
      mockProjectService,
      'detailsProjectAsync'
    );
    detailsProjectAsync.and.returnValue(
      Promise.resolve(mockProjectDetailsWithRepository)
    );

    const getMetricByProject = spyOn(mockProjectService, 'getMetricByProject');
    getMetricByProject.and.returnValue(Promise.resolve(metricProject));

    component.ngOnInit();

    expect(mockProjectService.detailsProjectAsync).toHaveBeenCalled();
    expect(mockProjectService.getMetricByProject).toHaveBeenCalled();
  });

  it('si el proyecto no está vinculado a un repo de github o gitlab que no traiga las métricas : getMetricByProject()', () => {
    // const detailsProjectAsync = spyOn(mockProjectService,'detailsProjectAsync')
    // detailsProjectAsync.and.returnValue(
    //   Promise.resolve(mockProjectDetails)
    // );
  
    // component['mockProjectService'] = mockProjectService;
  
    // component.ngOnInit();
  
    // expect(mockProjectService.detailsProjectAsync).toHaveBeenCalled();
    // expect(mockProjectService.getMetricByProject).not.toHaveBeenCalled();
  });
});

// describe('DetailsProjectComponentSinLogin', () => {
//   let component: DetailsProjectComponent;
//   let fixture: ComponentFixture<DetailsProjectComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [
//         DetailsProjectComponent,
//         BannerComponent,
//         ChartBarComponent,
//         ChartLineComponent,
//         ChartDoughnutComponent,
//         ModalScoreComponent,
//       ],
//       providers: [
//         MessageService,
//         { provide: ProjectService, useValue: mockProjectService },
//         TechnologiesService
//       ],
//       imports: [
//         BrowserAnimationsModule,
//         PrimengModule,
//         RouterTestingModule,
//         HttpClientTestingModule,
//         SharedModule,
//       ],
//     }).compileComponents();

//     fixture = TestBed.createComponent(DetailsProjectComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('que al iniciar el componente se llame a : detailsProject', () => {
//     const detailsProjectAsync = spyOn(
//       mockProjectService,
//       'detailsProjectAsync'
//     );
//     detailsProjectAsync.and.returnValue(
//       new Promise((resolve, reject) => {
//         resolve(mockProjectDetails);
//       })
//     );
//     component.ngOnInit();
//     expect(mockProjectService.detailsProjectAsync).toHaveBeenCalled();
//     expect(component.searchProject._id).toEqual('1');
//   });
// });
