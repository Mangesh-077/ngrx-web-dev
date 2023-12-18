import { createReducer } from "@ngrx/store"
import {  initailState2 } from "./post.state"

const _postsReducer = createReducer(initailState2);

export function postsReducer(state:any, action:any) {
    return _postsReducer(state, action)
};

