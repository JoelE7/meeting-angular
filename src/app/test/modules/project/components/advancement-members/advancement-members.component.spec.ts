import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvancementMembersComponent } from 'src/app/modules/project/components/advancement-members/advancement-members.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('AdvancementMembersComponent', () => {
  let component: AdvancementMembersComponent;
  let fixture: ComponentFixture<AdvancementMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancementMembersComponent ],
      providers : [],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancementMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
