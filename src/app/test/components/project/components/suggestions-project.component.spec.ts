import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestionsProjectComponent } from 'src/app/components/project/components/suggestions-project/suggestions-project.component';


describe('SuggestionsProjectComponent', () => {
  let component: SuggestionsProjectComponent;
  let fixture: ComponentFixture<SuggestionsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsProjectComponent ]
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
