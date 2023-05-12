import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarComponent } from '../../../../shared/components/chart-bar/chart-bar.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('ChartBarComponent', () => {
  let component: ChartBarComponent;
  let fixture: ComponentFixture<ChartBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBarComponent ],
      imports : [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
