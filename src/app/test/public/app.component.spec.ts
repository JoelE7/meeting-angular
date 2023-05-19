import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { MenuComponent } from 'src/app/public/menu/menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { MainComponent } from 'src/app/public/main/main.component';
import { FooterComponent } from 'src/app/public/footer/footer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,MenuComponent,MainComponent,FooterComponent
      ],
      providers : [MessageService],
      imports : [RouterTestingModule,PrimengModule,HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
