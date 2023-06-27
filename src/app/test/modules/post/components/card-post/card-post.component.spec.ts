import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostComponent } from '../../../../../modules/post/components/card-post/card-post.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';
import { TechnologiesService } from 'src/app/api/services/data/technologies.service';

describe('CardPostComponentConLogin', () => {
  let component: CardPostComponent;
  let fixture: ComponentFixture<CardPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPostComponent ],
      providers:[TechnologiesService],
      imports:[ PrimengModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    localStorage.setItem('user',JSON.stringify(userMock))
  });

  afterEach(() => {
    localStorage.removeItem("user");
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CardPostComponentSinLogin', () => {
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

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});