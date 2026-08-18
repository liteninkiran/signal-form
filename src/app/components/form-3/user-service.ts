import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserInfo } from './types';
import { firstValueFrom, switchMap, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  saveUserInfo(userInfo: UserInfo): Promise<unknown> {
    const url = '/api/users';
    const post = () => this.http.post(url, userInfo);
    const obs$ = timer(2000).pipe(switchMap(post));
    return firstValueFrom(obs$);
  }
}
