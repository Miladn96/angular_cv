import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class MyEffects {
  myEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[My Feature] My Action'),
      map(action => {
        // Define your effect logic here
      })
    )
  );

  constructor(private actions$: Actions) {}
}