import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from './interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  menu: Menu[] = [];
  url: string = '';
  session:any = localStorage.getItem('token')


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

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
          tooltipEvent: "hover",
          tooltipPosition : "bottom"
        },
        visible: false,
        class : "nav-link items-nav d-flex flex-column"
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
          tooltipEvent: "hover",
          tooltipPosition : "bottom"
        },
        visible: false,
        class : "nav-link items-nav d-flex flex-column"
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
          tooltipEvent: "hover",
          tooltipPosition : "bottom"
        },
        visible: false,
        class : "nav-link items-nav d-flex flex-column"
      },
    ];
  }

  menuItemUrl(url: string) {
    this.url = url;
  }

  login(){
    return true;
  }
}
