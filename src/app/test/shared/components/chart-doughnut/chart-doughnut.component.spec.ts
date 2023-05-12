import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDoughnutComponent } from '../../../../shared/components/chart-doughnut/chart-doughnut.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('ChartDoughnutComponent', () => {
  let component: ChartDoughnutComponent;
  let fixture: ComponentFixture<ChartDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDoughnutComponent ],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
