import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  private errors$$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])
  errors$: Observable<string[]> = this.errors$$
    .pipe(
      filter(messages => messages && messages.length > 0)
    )

  showErrors(...errors: string[]) {
    this.errors$$.next(errors)
  }
}
