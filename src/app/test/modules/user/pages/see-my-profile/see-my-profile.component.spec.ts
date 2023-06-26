import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SeeMyProfileComponent } from 'src/app/modules/user/pages/see-my-profile/see-my-profile.component';
import { TechnologiesComponent } from 'src/app/modules/user/components/technologies/technologies.component';
import { CardProjectComponent } from 'src/app/modules/project/components/card-project/card-project.component';
import { MessageService, SharedModule } from 'primeng/api';
import { ChartBarComponent } from 'src/app/shared/components/chart-bar/chart-bar.component';
import { ChartDoughnutComponent } from 'src/app/shared/components/chart-doughnut/chart-doughnut.component';
import { ChartLineComponent } from 'src/app/shared/components/chart-line/chart-line.component';
import { HttpClientModule } from '@angular/common/http';
import { userMock, userMock2, userMock3, userMockMetric } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { ModalInvitationComponent } from 'src/app/modules/user/shared/modal-invitation/modal-invitation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharRadarComponent } from 'src/app/shared/components/char-radar/char-radar.component';
import { UserService } from 'src/app/api/services/user/user.service';
import { mockUserService } from 'src/app/test/__mocks__/services/user/user.service.mock';
import { of } from 'rxjs';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { mockProjectService } from 'src/app/test/__mocks__/services/project/project.service.mock';
import { User } from 'src/app/shared/models/user/user.class';
import { Project } from 'src/app/shared/models/project/project.class';

describe('See my profileConLogin', () => {
  let component: SeeMyProfileComponent;
  let fixture: ComponentFixture<SeeMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SeeMyProfileComponent,
        TechnologiesComponent,
        CardProjectComponent,
        ChartBarComponent,
        ChartDoughnutComponent,
        ChartLineComponent,
        CharRadarComponent,
        ModalInvitationComponent
      ],
      providers:[MessageService,{provide : UserService, useValue : mockUserService},{provide:ProjectService, useValue:mockProjectService}],
      imports: [PrimengModule, RouterTestingModule, SharedModule,HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.setItem('user',JSON.stringify(userMock))

  });

  afterEach(() => {
    localStorage.removeItem("user");
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('que se busque el usuario del perfil : detailsUserAsync',async ()=>{
    const detailsUserAsync = spyOn(mockUserService,'detailsUserAsync');
    detailsUserAsync.and.returnValue(Promise.resolve(userMock));
    await component.ngOnInit();
    expect(mockUserService.detailsUserAsync).toHaveBeenCalled();
    expect(component.searchUser._id).toEqual(userMock._id);
  })

  it('si el usuario tiene vinculado github o gitlab que traiga sus metricas',async ()=>{
    component.currentUser = userMock
    const detailsUserAsync = spyOn(mockUserService,'detailsUserAsync');
    detailsUserAsync.and.returnValue(Promise.resolve(userMock));
    const getLanguagesGithub = spyOn(mockUserService,'getLanguagesGithub');
    getLanguagesGithub.and.returnValue(Promise.resolve(""));
    await component.ngOnInit();
    expect(mockUserService.detailsUserAsync).toHaveBeenCalled();
    expect(mockUserService.getLanguagesGithub).toHaveBeenCalled();
  })

  it('si el usuario NO tiene vinculado  github o gitlab que NO traiga sus metricas',async ()=>{
    component.currentUser = userMock3
    const detailsUserAsync = spyOn(mockUserService,'detailsUserAsync');
    detailsUserAsync.and.returnValue(Promise.resolve(userMock3));
    const getLanguagesGithub = spyOn(mockUserService,'getLanguagesGithub');
    getLanguagesGithub.and.returnValue(Promise.resolve(""));
    await component.ngOnInit();
    expect(mockUserService.detailsUserAsync).toHaveBeenCalled();
    expect(mockUserService.getLanguagesGithub).not.toHaveBeenCalled();
  })

  it('que el usuario pueda vincularse con github',async ()=>{
  })

  it('que el usuario pueda vincularse con gitlab',async ()=>{
    const updateUser = spyOn(mockUserService,'updateUser')
    const getCommitsByUserGithub = spyOn(mockUserService,'getCommitsByUserGithub')
    updateUser.and.returnValue(of<any>({}));
    getCommitsByUserGithub.and.returnValue(Promise.resolve(userMockMetric));
    component.userNameGitlab = "gitlabName";
    await component.linkUsertWithGitlab();
    expect(mockUserService.updateUser).toHaveBeenCalled();
  })

  it('que el usuario pueda vincularse con github',async ()=>{
    const updateUser = spyOn(mockUserService,'updateUser')
    const getCommitsByUserGithub = spyOn(mockUserService,'getCommitsByUserGithub')
    updateUser.and.returnValue(of<any>({}));
    getCommitsByUserGithub.and.returnValue(Promise.resolve(userMockMetric));
    component.userNameGithub = "githubName";
    await component.linkUsertWithGithub();
    expect(mockUserService.updateUser).toHaveBeenCalled();
  })

  it('que el usuario no pueda vincularse con gitlab',async ()=>{
    const updateUser = spyOn(mockUserService,'updateUser')
    const getCommitsByUserGithub = spyOn(mockUserService,'getCommitsByUserGithub')
    updateUser.and.returnValue(of<any>({}));
    getCommitsByUserGithub.and.returnValue(Promise.resolve(userMockMetric));
    await component.linkUsertWithGitlab();
    expect(mockUserService.updateUser).not.toHaveBeenCalled();
  })

  it('que el usuario no pueda vincularse con gitlab',async ()=>{
    const updateUser = spyOn(mockUserService,'updateUser')
    const getCommitsByUserGithub = spyOn(mockUserService,'getCommitsByUserGithub')
    updateUser.and.returnValue(of<any>({}));
    getCommitsByUserGithub.and.returnValue(Promise.resolve(userMockMetric));
    await component.linkUsertWithGithub();
    expect(mockUserService.updateUser).not.toHaveBeenCalled();
  })

  it('que el usuario pueda invitar a un proyecto a otro usuario', ()=>{
    component.currentUser = userMock2
    const sendMailInvitation = spyOn(mockProjectService,'sendMailInvitation')
    sendMailInvitation.and.returnValue(of<any>({}));
    component.sendMailInvitation({user : new User(),email : "", project: new Project(), message : ""});
    expect(mockProjectService.sendMailInvitation).toHaveBeenCalled();
  })
});

describe('See my profileSinLogin', () => {
  let component: SeeMyProfileComponent;
  let fixture: ComponentFixture<SeeMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SeeMyProfileComponent,
        TechnologiesComponent,
        CardProjectComponent,
        ChartBarComponent,
        ChartDoughnutComponent,
        ChartLineComponent
      ],
      providers:[MessageService],
      imports: [PrimengModule, RouterTestingModule, SharedModule,HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SeeMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});