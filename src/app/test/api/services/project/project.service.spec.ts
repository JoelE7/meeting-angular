import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { environment } from 'src/environments/environment';
import { mockProjectDetails } from 'src/app/test/__mocks__/services/project/project.service.mock';
import { FilterService } from 'src/app/shared/filters/services/filter.service';
import { Method } from 'src/app/shared/filters/enum/method.enum';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { MailInvitation } from 'src/app/shared/models/model-mail-invitation/model-mail-invitation.interface';

describe('ProjectService', () => {
  let service: ProjectService;
  let filterService:FilterService
  let httpClient:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [FilterService,ProjectService]
    });
    service = TestBed.inject(ProjectService);
    filterService = TestBed.inject(FilterService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('detailsProject()', (done: DoneFn) => {
    let id = "";
    service.detailsProject(id).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/${id}`
    );

    expect(req.request.method).toEqual('GET');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/${id}`)

    req.flush({});
  });
  it('detailsProjectAsync()', () => {
    let id = "1"

    service.detailsProjectAsync(id).then((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpClient.expectOne(
      `${environment.apiUrl}/projects/${id}`
    );

    expect(req.request.method).toEqual('GET');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/${id}`)
    req.flush({}); 
  });

  it('createProject()', (done: DoneFn) => {
    service.createProject(mockProjectDetails).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/`)
    expect(req.request.body).toEqual(mockProjectDetails)

    req.flush({});
  });

  it('updateUser()', (done: DoneFn) => {
    service.updateProject(mockProjectDetails).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/${mockProjectDetails._id}`
    );

    expect(req.request.method).toEqual('PUT');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/${mockProjectDetails._id}`)
    expect(req.request.body).toEqual(mockProjectDetails)

    req.flush({});
  });

  it('getAllProjects()', (done: DoneFn) => {
    let filtersAccept = [
      'name',
      'description',
      'type',
      'complexity',
      'amountParticipants',
      'leaderId',
      'startDate',
      'endDate',
      'participantsId',
      'languages',
      'technologies',
      'status',
      'requestSupport',
      'ownProject'
    ];

    let pagination = 1;
    let query:any = [
        {
          col: 'technologies',
          value: {
            "technologie" : ['Angular'],
          },
        },
    ]
    query['method'] = Method.POST
    query.push({col : "ownProject", value : true});


    let queryBuild = filterService.getFiltersForPost(query,filtersAccept)


    service.getAllProjects(query, pagination,userMock,true).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/filter/${pagination}`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(queryBuild);

    req.flush({});
  });

  it('getSuggestedProjects()', (done: DoneFn) => {
    service.getSuggestedProjects(userMock).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/suggestions`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/suggestions`)
    expect(req.request.body).toEqual(userMock)

    req.flush({});
  });

  it('finalizeProject()', (done: DoneFn) => {
    let scores = {
      msg : "puntos"
    }

    let idProject = "1"
    service.finalizeProject(idProject,scores).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/finish/${idProject}`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/finish/${idProject}`)
    expect(req.request.body).toEqual(scores)

    req.flush({});
  });

  it('getMetricByProject()',() => {
    let id = "1"

    service.getMetricByProject(id).then((result) => {
      expect(result).toBeTruthy();
    });

    const req = httpClient.expectOne(
      `${environment.apiUrl}/projects/getMetrics/${id}`
    );

    expect(req.request.method).toEqual('GET');
    expect(req.request.urlWithParams).toEqual( `${environment.apiUrl}/projects/getMetrics/${id}`)
    req.flush({}); 
  });

  it('joinProject()', (done: DoneFn) => {
    let projectId = "1"
    let userId = "1"
    let support = false 
    let body = {
      projectId,
      userId,
      support
    }
    service.joinProject(projectId,userId,support).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/join/`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/join/`)
    expect(req.request.body).toEqual(body)

    req.flush({});
  });

  it('sendMailInvitation()', (done: DoneFn) => {
    let mail:MailInvitation = {
      email : "mock@gmail.com",
      message : "mensaje",
      project : mockProjectDetails,
      user : userMock
    }

    service.sendMailInvitation(mail).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/invite`
    );

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/invite`)
    expect(req.request.body).toEqual(mail)

    req.flush({});
  });

  it('sendRequestToJoinTheProject()', (done: DoneFn) => {
    let request = {
      userMock
    }

    service.sendRequestToJoinTheProject(mockProjectDetails,request).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/request/${mockProjectDetails._id}`
    );mockProjectDetails

    expect(req.request.method).toEqual('PUT');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/request/${mockProjectDetails._id}`)
    expect(req.request.body).toEqual(request)

    req.flush({});
  });

  it('cancelRequestToJoinTheProject()', (done: DoneFn) => {
    let request = {
      userMock
    }

    service.cancelRequestToJoinTheProject(mockProjectDetails,request).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/request/${mockProjectDetails._id}`
    );mockProjectDetails

    expect(req.request.method).toEqual('PUT');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/request/${mockProjectDetails._id}`)
    expect(req.request.body).toEqual(request)

    req.flush({});
  });

  it('leaveProject()', (done: DoneFn) => {
    let userLeave = {
      userMock
    }

    service.leaveProject(mockProjectDetails,userLeave).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/leave/${mockProjectDetails._id}`
    );mockProjectDetails

    expect(req.request.method).toEqual('PUT');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/leave/${mockProjectDetails._id}`)
    expect(req.request.body).toEqual(userLeave)

    req.flush({});
  });

  it('userRequestResponsesLeader()', (done: DoneFn) => {
    let userResponse = {
      userMock
    }

    service.userRequestResponsesLeader(mockProjectDetails,userResponse).subscribe({
      next: (data) => {
        done();
      },
    });

    const req: TestRequest = httpClient.expectOne(
      `${environment.apiUrl}/projects/request/${mockProjectDetails._id}`
    );mockProjectDetails

    expect(req.request.method).toEqual('POST');
    expect(req.request.urlWithParams).toEqual(`${environment.apiUrl}/projects/request/${mockProjectDetails._id}`)
    expect(req.request.body).toEqual(userResponse)

    req.flush({});
  });

});
