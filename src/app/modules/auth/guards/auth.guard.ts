import {inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/api/services/auth/auth.service';

const isAuthenticated = (route: ActivatedRouteSnapshot,state: RouterStateSnapshot): | boolean | UrlTree=> {
  const authService = inject(AuthService); //en el futuro vamos a usar el servicio para consultar al back, por el token
                                           //hasta que esté lo de jwt usamos el localStorage
  const router = inject(Router);

  let user = localStorage.getItem('user');
  if(user){
    return true;
  }
  return false || router.createUrlTree(['login'])
}
const isAuthenticatedMatch = (route: ActivatedRouteSnapshot,segments: UrlSegment[]): | boolean | UrlTree=> {
  const authService = inject(AuthService);
  const router = inject(Router);

  let user = localStorage.getItem('user');
  if(user){
    return true;
  }
  return false || router.createUrlTree(['login'])
}


export const canActivateAuth:CanActivateFn = isAuthenticated; //si retorna true, deja pasar, si retorna false, niega la url y redirige
export const canMatch:CanMatchFn = isAuthenticatedMatch; // si retorna true carga el modulo y sus hijos, en caso de que no, redirig
                                                                //es como un lazy load

