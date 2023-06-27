import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectMemberComponent } from 'src/app/modules/project/components/project-member/project-member.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('ProjectMemberComponent', () => {
  let component: ProjectMemberComponent;
  let fixture: ComponentFixture<ProjectMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMemberComponent ],
      providers : [],
      imports : [PrimengModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
