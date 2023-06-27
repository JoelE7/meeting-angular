import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportCollaborateComponent } from 'src/app/modules/project/components/support-collaborate/support-collaborate.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('SupportCollaborateComponent', () => {
  let component: SupportCollaborateComponent;
  let fixture: ComponentFixture<SupportCollaborateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportCollaborateComponent ],
      providers : [],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportCollaborateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
