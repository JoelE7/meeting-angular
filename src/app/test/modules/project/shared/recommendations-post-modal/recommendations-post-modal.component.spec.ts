import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendationsPostModalComponent } from 'src/app/modules/project/shared/recommendations-post-modal/recommendations-post-modal.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('RecommendationsPostModalComponent', () => {
  let component: RecommendationsPostModalComponent;
  let fixture: ComponentFixture<RecommendationsPostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationsPostModalComponent ],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationsPostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
