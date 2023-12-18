import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.store';
import { getPost } from '../state/posts.selector';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit{
  post$!: Observable<Post[]>

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
  //  this.post$ = 
   this.store.select('posts')
    .subscribe(res => {
      console.log(res);
      
    })
  }
}
