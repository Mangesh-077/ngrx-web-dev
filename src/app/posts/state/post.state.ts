import { Post } from "src/app/models/posts.model"

export interface PostsState  {
    posts: Post[]
}




export const initailState2: PostsState = {
    posts: [
        {id: 1, title: 'title 1', description: 'lorem ipsum'},
        {id: 2, title: 'title 2', description: 'lorem ipsum'}
    ]
}


