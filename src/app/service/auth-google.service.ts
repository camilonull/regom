import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
@Injectable({
  providedIn: 'root',
})
export class AuthGoogleService {

  private readonly AUTH_KEY = 'isAuthenticated';

  setAuthConfirm(isAuthenticated: boolean): void {
    localStorage.setItem(this.AUTH_KEY, isAuthenticated ? 'true' : 'false');
  }

  getAuthConfirm(): boolean {
    const isAuthenticated = localStorage.getItem(this.AUTH_KEY);
    return isAuthenticated === 'true';
  }

  constructor(private oauthService: OAuthService) {
    this.initLogin();
  }

  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId:
        '449533916102-c2p79chbhtulm7gfqaemtllksr8st1t1.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/work',
      scope: 'openid profile email',
    };

    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    try {
      console.log(this.oauthService.getAccessToken(), 'hola');
      this.setAuthConfirm(true);
      this.oauthService.initLoginFlow();

    } catch (error) {
      this.setAuthConfirm(false);
      console.log(error);
    }
  }

  logout() {
    try {
      this.setAuthConfirm(false);
      this.oauthService.logOut();
    } catch (error) {
      console.log(error);
    }
  }

  getProfile() {
    return this.oauthService.getIdentityClaims();
  }
}
