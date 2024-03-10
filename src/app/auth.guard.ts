import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokenService } from './services/token/token.service';

export const authGuard: CanActivateFn = (route, state) => {

  const service = inject(TokenService)
  
  const userToken = service.getToken();
  if (userToken) {
    console.log(userToken);
    return true;
  } else {
    return false;
  }
};
