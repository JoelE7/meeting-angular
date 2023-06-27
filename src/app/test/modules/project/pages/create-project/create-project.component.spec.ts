import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of, tap } from 'rxjs';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { FormProjectComponent } from 'src/app/modules/project/components/form-project/form-project.component';
import { CreateProjectComponent } from 'src/app/modules/project/pages/create-project/create-project.component';
import { ListProjectComponent } from 'src/app/modules/project/pages/list-project/list-project.component';
import { Project } from 'src/app/shared/models/project/project.class';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { mockProjectService } from 'src/app/test/__mocks__/services/project/project.service.mock';

describe('CreateProjectComponent', () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProjectComponent, FormProjectComponent],
      providers: [
        MessageService,
        { provide: ProjectService, useValue: mockProjectService },
        TechnologiesService
      ],
      imports: [
        PrimengModule,
        RouterTestingModule.withRoutes([
          { path: 'project/list-project', component: ListProjectComponent },
        ]),
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.setItem('user',JSON.stringify(userMock))
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    localStorage.removeItem("user");
  })
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('al crear un proyecto que se llame al método del servicio y redirija a /project/list-project : createProject', () => {
    const createProject = spyOn(mockProjectService, 'createProject');
    const navigateSpy = spyOn(router, 'navigate');
    createProject.and.returnValue(of<any>({}));
    component.createProject(new Project());
    expect(mockProjectService.createProject).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/project/list-project']);
  });

  it('al crear un proyecto y este da error que no redirija a /project/list-project : createProject', () => {
    const createProject = spyOn(mockProjectService, 'createProject');
    const navigateSpy = spyOn(router, 'navigate');
    createProject.and.returnValue(
      of({}).pipe(
        tap(() => {
          throw { status: 500 };
        })
      )
    );
    component.createProject(new Project());
    expect(mockProjectService.createProject).toHaveBeenCalled();
    expect(navigateSpy).not.toHaveBeenCalledWith(['/project/list-project']);
  });
});
