import { createReducer, on } from "@ngrx/store"
import { initailState } from "./counter.state"
import { changeName, customCounter, decrement, increment, reset } from "./counter.action"
import { state } from "@angular/animations";

const _counterReducer = createReducer(initailState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter:  0
        }
    }),
    on(customCounter, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.count
        }
    }),
    on(changeName, (state, action) => {
        return {
            ...state,
            skills: state.skills + " " + action.skills
        }
    })
)


export function counterReducer(state: any, action: any){
    return _counterReducer(state, action)
}

