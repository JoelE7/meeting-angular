import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostComponent } from '../../../../../components/post/pages/list-post/list-post.component';
import { CardPostComponent } from '../../../../../components/post/components/card-post/card-post.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/api/services/post/post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListPostComponent', () => {
  let component: ListPostComponent;
  let fixture: ComponentFixture<ListPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostComponent,CardPostComponent ],
      providers:[PostService,MessageService],
      imports:[ PrimengModule,HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
