import { Observable, of } from 'rxjs';
import { userMock } from '../../models/users/users.mock.model';

export const mockAuthService: {
  loginUser: () => Observable<any>;
  registerUser: () => Observable<any>;
  setLogin: ()=> {}
} = {
  loginUser: () => of({"token" : "dada", "user" : userMock}),  registerUser: () => of(['']),
  setLogin : ()=> of({})
};
