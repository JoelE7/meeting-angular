import { Observable, of } from 'rxjs';

export const mockAuthService: {
  loginUser: () => Observable<any>;
  registerUser: () => Observable<any>;
} = {
  loginUser: () => of(['']),
  registerUser: () => of(['']),
};
