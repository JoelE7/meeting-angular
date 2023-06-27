import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendationsTechnologiesModalComponent } from 'src/app/modules/project/shared/recommendations-technologies-modal/recommendations-technologies-modal.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('RecommendationsTechnologiesModalComponent', () => {
  let component: RecommendationsTechnologiesModalComponent;
  let fixture: ComponentFixture<RecommendationsTechnologiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationsTechnologiesModalComponent ],
      imports : [PrimengModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationsTechnologiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
