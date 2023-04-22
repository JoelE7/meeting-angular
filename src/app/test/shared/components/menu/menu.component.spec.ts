import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';
import { MainComponent } from 'src/app/shared/components/main/main.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent,MainComponent ],
      providers : [AuthService],
      imports : [HttpClientTestingModule,RouterTestingModule,PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
