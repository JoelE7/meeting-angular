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
import { mockProjectDetails, mockProjectService } from 'src/app/test/__mocks__/services/project/project.service.mock';
import { ModalScoreComponent } from 'src/app/modules/project/shared/modal-score/modal-score.component';

describe('DetailsProjectComponent', () => {
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
        ModalScoreComponent
      ],
      providers: [MessageService, { provide: ProjectService, useValue: mockProjectService },],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('que al iniciar el componente se llame a : detailsProject',()=>{
    const detailsProject = spyOn(mockProjectService, 'detailsProject');
    detailsProject.and.returnValue(of<Project>(mockProjectDetails));
    component.ngOnInit();
    expect(mockProjectService.detailsProject).toHaveBeenCalled();
    expect(component.searchProject._id).toEqual("1");

  })


});
