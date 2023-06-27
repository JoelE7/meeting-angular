import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchUserComponent } from 'src/app/modules/user/pages/search-user/search-user.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserComponent ],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
