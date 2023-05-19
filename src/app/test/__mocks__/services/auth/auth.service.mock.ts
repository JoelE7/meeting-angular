import { Observable, of } from 'rxjs';

export const mockAuthService: {
  loginUser: () => Observable<any>;
  registerUser: () => Observable<any>;
  setLogin: ()=> {}
} = {
  loginUser: () => of(['']),
  registerUser: () => of(['']),
  setLogin : ()=> of({})
};
