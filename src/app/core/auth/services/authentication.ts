import {
  Injectable,
  signal,
  computed,
  inject,
  NgZone,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  // currentUser = signal<User | null>(null);
  // isLoggedIn = computed(() => !!this.currentUser());

  constructor() {



  }
  private createServerError(): any {
    // return {
    //   data: { user: null, session: null },
    //   error: new AuthError(
    //     'La autenticación no está disponible en el servidor.',
    //   ),
    // };
  }

  async signIn(email: string, password: string): Promise<any> {
    //   if (!this.gitHubApi) return this.createServerError();
    //   return await this.gitHubApi.auth.signInWithPassword({ email, password });
    // }

    // async signUp(
    //   name: string,
    //   email: string,
    //   password: string,
    // ): Promise<AuthResponse> {
    //   if (!this.gitHubApi) return this.createServerError();
    //   return await this.gitHubApi.auth.signUp({
    //     email,
    //     password,
    //     options: { data: { full_name: name } },
    //   });
    // }

    // async signOut(): Promise<{ error: AuthError | null }> {
    //   let result: { error: AuthError | null } = { error: null };
    //   if (!this.gitHubApi) {
    //     result = {
    //       error: new AuthError(
    //         'La autenticación no está disponible en el servidor.',
    //       ),
    //     };
    //   } else {
    //     result = await this.gitHubApi.auth.signOut();
    //   }
    //   this.router.navigate(['/sign-in']);

    //   return result;
  }
}
