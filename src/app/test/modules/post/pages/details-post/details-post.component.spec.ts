import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsPostComponent } from 'src/app/modules/post/pages/details-post/details-post.component';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

describe('DetailsPostComponent', () => {
  let component: DetailsPostComponent;
  let fixture: ComponentFixture<DetailsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPostComponent ],
      providers:[MessageService],
      imports:[ PrimengModule,RouterTestingModule,HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
