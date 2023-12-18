import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { CustomCounterInputComponent } from './counter/custom-counter-input/custom-counter-input.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { postsReducer } from './posts/state/post.reducer';
import { appReducer } from './store/app.store';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
    HomeComponent,
    PostsComponent,
    PostsListComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// store
// store dev tools
// schematics tools

                      // (take old state => update new state)
// component -> action -> reducer -> store (application data)

// state is immutable (not deletable)

// selector :- whenever state update selector get notify components get notify
//  
// component can subscribe to selector get state update

// ======================================================== //

// store proviede client side caching 
// single way to get data only through selector
///////////////////////////////////////
// ---- store state Data ----//
// const state = {
//   user: {
//     email: 'abc@gmai.com',
//     token: 'token'
//   },
//   post:[
//     {
//       id: 1,
//       title: 'heading',
//       description: 'paragraph'
//     },
//     {
//       id: 2,
//       title: 'heading',
//       description: 'paragraph'
//     }
//   ]
// }

//---Action ---//
// any event perform in component we need to dispatch a Action

// const LoginAction = {
//   type: 'LOGIN',
//   user: {
//     email: 'email@gmail.com',
//     password: 'secred'
//   }
// }

// const RegistrerAction = {
//   type: 'Register',
//   user: {
//     email: 'email@gmail.com',
//     password: 'secred'
//   }
// }

//e.g:- show spinner and hide spinner

////////--- Reducers- ---////

// when we dispatch a Action .. that action through we need to send data

// const _sharedReducer = createReducer(
//   initailState,
//   on(showLoading, (state, action) => {
//     return {
//       ...state,
//       loading: action.loading,
//       loadingText: action.text ? action.text : 'loading',
//     };
//   }),
//   on(setErrorMessage, (state, action) => {
//     return {
//       ...state,
//       errorMessage: action.message
//     }
//   })
// )

// Reducers are pure function (function give same argument alway return a same value )

// /////////////////////////////

// steps for implement ngrx //
// -- create state (intial state)
// -- create Action 
// -- create Reducer 
// -- import the store in app.module.ts
// -- Retrieving store in component by injecting

//https://github.com/leelanarasimha/ngrx-counter/tree/Video-10