import * as {{ camelCase name }} from './{{ dashCase name }}.actions';
import { {{ properCase name }}State, initial{{ properCase name }}State } from './{{ dashCase name }}.state';

export function {{camelCase name}}Reducer(state = initial{{ properCase name }}State, action: {{ camelCase name }}.Actions): {{ properCase name }}State {
  switch (action.type) {

    {{#each (__toArray actionNames)}}
    case {{ camelCase ../name }}.{{constantCase this}}: {
      return {
        ...state
      };
    }

    {{/each}}
    default: {
      return state;
    }
  }
}
