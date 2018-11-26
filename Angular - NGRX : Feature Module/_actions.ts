import { Action } from '@ngrx/store';

{{#each actionNames}}
export const {{constantCase this}} = '[{{ titleCase ../name }}] {{sentenceCase this}}';
{{/each}}

{{#each actionNames}}
export class {{properCase this}}Action implements Action {
  readonly type = {{constantCase this}};

  constructor(public payload: any) { }
}

{{/each}}

export type Actions =
{{#each actionNames}}
| {{properCase this}}Action{{/each}};