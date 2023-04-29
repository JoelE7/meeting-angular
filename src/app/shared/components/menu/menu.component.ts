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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.menu = [
      {
        name: 'Home',
        icon: 'bi bi-house text-center',
        url: '/home',
        urlActiveClass: 'active',
        tooltip: 'Home',
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
        name: 'Proyectos',
        icon: 'bi bi-clipboard-minus text-center ',
        url: '/url1',
        urlActiveClass: 'active',
        tooltip: 'url1',
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
        url: '/url2',
        urlActiveClass: 'active',
        tooltip: 'url2',
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
