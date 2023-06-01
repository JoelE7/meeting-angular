import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from './interfaces/menu.interface';
import { User } from '../../shared/models/user/user.class';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit,DoCheck {
  menu: Menu[] = [];
  url: string = '';
  session: any = localStorage.getItem('token');
  currentUser: User = JSON.parse(localStorage.getItem('user')) || undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService, 
    private authService:AuthService
  ) {}
  ngDoCheck(): void {
    this.currentUser =  JSON.parse(localStorage.getItem('user')) || undefined;
  }

  ngOnInit(): void {
    this.menu = [
      {
        name: 'Proyectos',
        icon: 'bi bi-clipboard-minus text-center ',
        url: '/project/list-project',
        urlActiveClass: 'active',
        tooltip: 'Proyectos',
        tooltipOptions: {
          showDelay: 1000,
          autoHide: false,
          tooltipEvent: 'hover',
          tooltipPosition: 'bottom',
        },
        visible: false,
        class: 'nav-link items-nav d-flex flex-column',
      },
      {
        name: 'Usuarios',
        icon: 'bi bi-people',
        url: '/user/list-users',
        urlActiveClass: 'active',
        tooltip: 'Usuarios',
        tooltipOptions: {
          showDelay: 1000,
          autoHide: false,
          tooltipEvent: 'hover',
          tooltipPosition: 'bottom',
        },
        visible: false,
        class: 'nav-link items-nav d-flex flex-column',
      },
      {
        name: 'Foro',
        icon: 'bi bi-chat-right-text',
        url: '/post/list-post',
        urlActiveClass: 'active',
        tooltip: 'Foro',
        tooltipOptions: {
          showDelay: 1000,
          autoHide: false,
          tooltipEvent: 'hover',
          tooltipPosition: 'bottom',
        },
        visible: false,
        class: 'nav-link items-nav d-flex flex-column',
        badge: "2"
      },
    ];
  }

  menuItemUrl(url: string) {
    this.url = url;
  }

  login():boolean {
    return this.authService.getLogin;
  }

  signOut() {
    localStorage.removeItem('user');
    this.messageService.add({
      severity: 'success',
      summary: '¡Hecho!',
      detail: '¡Cierre de sesión exitoso!',
    });
    this.authService.setLogin(false);
    this.router.navigate(['/login']);
  }
}
