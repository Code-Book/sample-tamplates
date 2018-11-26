import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { {{properCase name }}Service } from './{{ dashCase name }}.service';
import * as {{ camelCase name }} from './{{ dashCase name }}.actions';

@Injectable()
export class {{ properCase name }}Effects {

  {{#if generateEffects}}
  {{#each actionNames}}
  @Effect({dispatch : false}) {{camelCase this}}$ = this.actions$
    .pipe(
      ofType({{ camelCase ../name }}.{{constantCase this}}),
      tap(()=> console.log('Called Action {{constantCase this}}')));

  {{/each}}
  {{/if}}
  
  constructor(
    private {{ camelCase name }}Service: {{ properCase name }}Service,
    private actions$: Actions
  ) { }

}
