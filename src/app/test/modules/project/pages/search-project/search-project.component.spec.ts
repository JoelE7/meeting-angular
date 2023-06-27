/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchProjectComponent } from 'src/app/modules/project/pages/search-project/search-project.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('SearchProjectComponent', () => {
  let component: SearchProjectComponent;
  let fixture: ComponentFixture<SearchProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProjectComponent ],
      imports : [PrimengModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
