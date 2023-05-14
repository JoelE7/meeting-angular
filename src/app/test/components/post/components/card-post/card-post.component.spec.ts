import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostComponent } from '../../../../../components/post/components/card-post/card-post.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardPostComponent', () => {
  let component: CardPostComponent;
  let fixture: ComponentFixture<CardPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPostComponent ],
      providers:[],
      imports:[ PrimengModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
