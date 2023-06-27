import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendationsProjectModalComponent } from 'src/app/modules/project/shared/recommendations-project-modal/recommendations-project-modal.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('RecommendationsProjectModalComponent', () => {
  let component: RecommendationsProjectModalComponent;
  let fixture: ComponentFixture<RecommendationsProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationsProjectModalComponent ],
      imports : [PrimengModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationsProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
