import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { ProjectService } from 'src/app/api/services/project/project.service';
import { FormProjectComponent } from 'src/app/modules/project/components/form-project/form-project.component';
import { CreateProjectComponent } from 'src/app/modules/project/pages/create-project/create-project.component';
import { ListProjectComponent } from 'src/app/modules/project/pages/list-project/list-project.component';
import { Project } from 'src/app/shared/models/project/project.class';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { userMock } from 'src/app/test/__mocks__/models/users/users.mock.model';
import { mockProjectService } from 'src/app/test/__mocks__/services/project/project.service.mock';

describe('CreateProjectComponent', () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProjectComponent, FormProjectComponent],
      providers: [
        MessageService,
        { provide: ProjectService, useValue: mockProjectService },
      ],
      imports: [
        PrimengModule,
        RouterTestingModule.withRoutes([
          { path: 'list-project', component: ListProjectComponent },
        ]),
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProjectComponent);
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

  it('al crear un proyecto que se llame al método del servicio : createProject', () => {
    const createProject = spyOn(mockProjectService, 'createProject');
    createProject.and.returnValue(of<any>({}));
    component.createProject(new Project());
    expect(mockProjectService.createProject).toHaveBeenCalled();
  });
});
