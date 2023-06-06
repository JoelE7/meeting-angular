import { Observable, of } from 'rxjs';
import { userMock } from 'src/app/test/__mocks__/models/user/user.mock.model';

export const mockAuthService: {
  loginUser: () => Observable<any>;
  registerUser: () => Observable<any>;
  setLogin: ()=> {}
} = {
  loginUser: () => of({"token" : "dada", "user" : userMock}),  registerUser: () => of(['']),
  setLogin : ()=> of({})
};
