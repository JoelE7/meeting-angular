import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from './interfaces/menu.interface';
import { AuthService } from 'src/app/api/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  menu: Menu[] = [];
  url: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private authService:AuthService) {}

  ngOnInit(): void {
    this.menu = [
      {
        name: 'Home',
        icon: 'bi bi-house-fill',
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
        class : "nav-link text-white mx-3"
      },
      {
        name: 'url1',
        icon: 'pi pi-star-fill',
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
        class : "nav-link text-white mx-3"
      },
      {
        name: 'url2',
        icon: 'pi pi-star-fill',
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
        class : "nav-link text-white mx-3"
      },
      {
        name: 'url3',
        icon: 'pi pi-star-fill',
        url: '/url3',
        urlActiveClass: 'active',
        tooltip: 'url3',
        tooltipOptions: {
          showDelay: 1000,
          autoHide: false,
          tooltipEvent: "hover",
          tooltipPosition : "bottom"
        },
        visible: false,
        class : "nav-link text-white mx-3"
      },
      {
        name: 'url4',
        icon: 'pi pi-star-fill',
        url: '/url4',
        urlActiveClass: 'active',
        tooltip: 'url4',
        tooltipOptions: {
          showDelay: 1000,
          autoHide: false,
          tooltipEvent: "hover",
          tooltipPosition : "bottom"
        },
        visible: false,
        class : "nav-link text-white mx-3"
      },
    ];
  }

  menuItemUrl(url: string) {
    this.url = url;
  }

  login(){
    return true;
    // return this.authService.getMenuVisible
  }
}
