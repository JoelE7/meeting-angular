import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumComponent } from '../../../../components/forum/pages/forum.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ForumComponent', () => {
  let component: ForumComponent;
  let fixture: ComponentFixture<ForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumComponent ],
      imports : [PrimengModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
