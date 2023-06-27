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
import { userMock, userMock2 } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { ModalInvitationProjectComponent } from 'src/app/modules/project/shared/modal-invitation-project/modal-invitation-project.component';
import { mockProjectDetailsWithRepository } from '../../../../__mocks__/services/project/project.service.mock';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';
import { User } from '../../../../../shared/models/user/user.class';

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
    const getMetricByProject = spyOn(mockProjectService, 'getMetricByProject');
    getMetricByProject.and.returnValue(Promise.resolve(metricProject));
  });

  afterEach(() => {
    component.searchProject = undefined
    localStorage.removeItem('user');
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('si el proyecto está vinculado a un repo de github o gitlab que se traiga las métricas : getMetricByProject()', async() => {
    const detailsProjectAsync = spyOn(
      mockProjectService,
      'detailsProjectAsync'
    );
    detailsProjectAsync.and.returnValue(
      Promise.resolve(mockProjectDetailsWithRepository)
    );


   await component.ngOnInit();

    expect(mockProjectService.detailsProjectAsync).toHaveBeenCalled();
    expect(mockProjectService.getMetricByProject).toHaveBeenCalled();
  });

  it('si el proyecto no está vinculado a un repo de github o gitlab que no traiga las métricas : getMetricByProject()', async() => {
    const detailsProjectAsync = spyOn(mockProjectService,'detailsProjectAsync')
    detailsProjectAsync.and.returnValue(
      Promise.resolve(mockProjectDetails)
    );
  
    await component.ngOnInit();
  
    expect(mockProjectService.detailsProjectAsync).toHaveBeenCalled();
    expect(mockProjectService.getMetricByProject).not.toHaveBeenCalled();
  });

  it('verificar si el usuario existe en el proyecto : checkUserIfExistsInProject()',async ()=>{
    component.currentUser = userMock
    const detailsProjectAsync = spyOn(mockProjectService,'detailsProjectAsync')
    detailsProjectAsync.and.returnValue(
      Promise.resolve(mockProjectDetails)
    );

    await component.ngOnInit();

    expect(mockProjectService.detailsProjectAsync).toHaveBeenCalled();
    expect(component.userExistProject).toBeTruthy()
  })
  
  it('verificar si el usuario envío solicitud al proyecto : checkUserIfSendRequest()',async ()=>{
    component.currentUser = userMock
    const detailsProjectAsync = spyOn(mockProjectService,'detailsProjectAsync')
    detailsProjectAsync.and.returnValue(
      Promise.resolve(mockProjectDetailsWithRepository)
    );

    await component.ngOnInit();

    expect(mockProjectService.detailsProjectAsync).toHaveBeenCalled();
    expect(component.userExistSendRequest).toBeTruthy()
  })

  it('que se pueda linkear el proyecto a un repositorio de github/gitlab : linkProjectToRepository()',async ()=>{
    const updateProject = spyOn(mockProjectService,'updateProject')
    updateProject.and.returnValue(of<any>({}));
    component.linkRepositoryProject = "https:github.com"
    await component.linkProjectToRepository();
    expect(mockProjectService.updateProject).toHaveBeenCalled();
  })


  it('que falle en caso de que no haya puesto una url de proyecto a un repositorio de github/gitlab : linkProjectToRepository()',async ()=>{
    const updateProject = spyOn(mockProjectService,'updateProject')
    updateProject.and.returnValue(of<any>({}));
    await component.linkProjectToRepository();
    expect(mockProjectService.updateProject).not.toHaveBeenCalled();
  })

  it('que el usuario logueado se pueda unir a un proyecto : joinProject()',()=>{
    component.currentUser = userMock2
    const joinProject = spyOn(mockProjectService,'joinProject')
    joinProject.and.returnValue(of<any>({}));
    component.joinAProject();
    expect(mockProjectService.joinProject).toHaveBeenCalled();
  })

  it('que se pueda cancelar una solicitud para unirse a un proyecto : cancelRequestToJoinTheProject()',()=>{
    component.currentUser = userMock2
    const cancelRequestToJoinTheProject = spyOn(mockProjectService,'cancelRequestToJoinTheProject')
    cancelRequestToJoinTheProject.and.returnValue(of<any>({}));
    component.cancelRequestToJoinTheProject();
    expect(mockProjectService.cancelRequestToJoinTheProject).toHaveBeenCalled();
  })

  it('que se pueda enviar una solicitud para unirse a un proyecto : sendRequestToJoinTheProject()',()=>{
    component.currentUser = userMock2
    const sendRequestToJoinTheProject = spyOn(mockProjectService,'sendRequestToJoinTheProject')
    sendRequestToJoinTheProject.and.returnValue(of<any>({}));
    component.sendRequestToJoinTheProject();
    expect(mockProjectService.sendRequestToJoinTheProject).toHaveBeenCalled();
  })

  it('que el usuario pueda abandonar un proyecto : leaveProject()',()=>{
    component.currentUser = userMock2
    const leaveProject = spyOn(mockProjectService,'leaveProject')
    leaveProject.and.returnValue(of<any>({}));
    component.leaveProject();
    expect(mockProjectService.leaveProject).toHaveBeenCalled();
  })

  it('que el usuario pueda aceptar o rechazar una solicitud',()=>{
    component.currentUser = userMock2
    const userRequestResponsesLeader = spyOn(mockProjectService,'userRequestResponsesLeader')
    userRequestResponsesLeader.and.returnValue(of<any>({}));
    component.userRequestResponsesLeader({user : { id : 1}, request : false});
    expect(mockProjectService.userRequestResponsesLeader).toHaveBeenCalled();
  })

  it('que el usuario pueda sugerir un proyecto : sendMailInvitation()',()=>{
    component.currentUser = userMock2
    const sendMailInvitation = spyOn(mockProjectService,'sendMailInvitation')
    sendMailInvitation.and.returnValue(of<any>({}));
    component.sendMailSuggestProject({user : new User(),email : "", project: new Project(), message : ""});
    expect(mockProjectService.sendMailInvitation).toHaveBeenCalled();
  })


  it('que se pueda finalizar un proyecto : finalizeProject()',()=>{
    component.currentUser = userMock2
    const finalizeProject = spyOn(mockProjectService,'finalizeProject')
    finalizeProject.and.returnValue(of<any>({}));
    component.finishProject({});
    expect(mockProjectService.finalizeProject).toHaveBeenCalled();
  })

});

describe('DetailsProjectComponentSinLogin', () => {
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
      ],
      providers: [
        MessageService,
        { provide: ProjectService, useValue: mockProjectService },
        TechnologiesService
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
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('que al iniciar el componente se llame a : detailsProject', () => {
    const detailsProjectAsync = spyOn(
      mockProjectService,
      'detailsProjectAsync'
    );
    detailsProjectAsync.and.returnValue(
      new Promise((resolve, reject) => {
        resolve(mockProjectDetails);
      })
    );
    component.ngOnInit();
    expect(mockProjectService.detailsProjectAsync).toHaveBeenCalled();
    expect(component.searchProject._id).toEqual('1');
  });

  xit('si el usuario no está logueado que no se pueda unir a un proyecto',()=>{
    const joinProject = spyOn(mockProjectService,'joinProject')
    joinProject.and.returnValue(of<any>({}));
    component.joinAProject();
    expect(mockProjectService.joinProject).not.toHaveBeenCalled();
  })
});
