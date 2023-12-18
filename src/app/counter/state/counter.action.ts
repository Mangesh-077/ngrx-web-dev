import { createAction, props } from "@ngrx/store";


// name should be unique (we called that identifier)
export const increment = createAction('increment'); 
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customCounter = createAction('customCounter', props<{count: number}>());
export const changeName = createAction('changeName', props<{skills: string}>());
