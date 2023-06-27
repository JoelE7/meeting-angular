import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectProfilesComponent } from 'src/app/modules/project/components/project-profiles/project-profiles.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('ProjectProfilesComponent', () => {
  let component: ProjectProfilesComponent;
  let fixture: ComponentFixture<ProjectProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectProfilesComponent ],
      providers : [],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
