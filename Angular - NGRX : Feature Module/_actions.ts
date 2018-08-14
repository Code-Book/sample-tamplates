import { Action } from '@ngrx/store';

{{#each (__toArray actionNames)}}
export const {{constantCase this}} = '[{{ titleCase ../name }}] {{sentenceCase this}}';
{{/each}}

{{#each (__toArray actionNames)}}
export class {{properCase this}}Action implements Action {
  readonly type = {{constantCase this}};

  constructor(public payload: any) { }
}

{{/each}}

export type Actions =
{{#each (__toArray actionNames)}}
| {{properCase this}}Action{{/each}};