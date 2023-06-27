import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestMemberComponent } from 'src/app/modules/project/components/request-member/request-member.component';


describe('RequestMemberComponent', () => {
  let component: RequestMemberComponent;
  let fixture: ComponentFixture<RequestMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMemberComponent ]
    }) 
    .compileComponents();

    fixture = TestBed.createComponent(RequestMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
