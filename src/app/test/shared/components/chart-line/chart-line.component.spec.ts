import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineComponent } from '../../../../shared/components/chart-line/chart-line.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('ChartLineComponent', () => {
  let component: ChartLineComponent;
  let fixture: ComponentFixture<ChartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLineComponent ],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
