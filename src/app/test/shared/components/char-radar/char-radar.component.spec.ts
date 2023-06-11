import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharRadarComponent } from 'src/app/shared/components/char-radar/char-radar.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';


describe('CharRadarComponent', () => {
  let component: CharRadarComponent;
  let fixture: ComponentFixture<CharRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharRadarComponent ],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
