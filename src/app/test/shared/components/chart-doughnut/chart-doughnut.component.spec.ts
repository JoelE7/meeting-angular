import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDoughnutComponent } from '../../../../shared/components/chart-doughnut/chart-doughnut.component';

describe('ChartDoughnutComponent', () => {
  let component: ChartDoughnutComponent;
  let fixture: ComponentFixture<ChartDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDoughnutComponent ]
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
