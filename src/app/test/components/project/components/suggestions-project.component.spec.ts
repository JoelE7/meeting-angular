import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { SuggestionsProjectComponent } from 'src/app/components/project/components/suggestions-project/suggestions-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('SuggestionsProjectComponent', () => {
  let component: SuggestionsProjectComponent;
  let fixture: ComponentFixture<SuggestionsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsProjectComponent ],
      providers : [MessageService],
      imports : [HttpClientTestingModule,PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
