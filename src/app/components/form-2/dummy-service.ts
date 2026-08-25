import { Injectable } from '@angular/core';
import { firstValueFrom, of, switchMap, timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DummyService {
  submit(): Promise<unknown> {
    const obs$ = timer(2000).pipe(switchMap(() => of(true)));
    return firstValueFrom(obs$);
  }
}
