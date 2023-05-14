import { ListPostComponent } from 'src/app/components/post/pages/list-post/list-post.component';
import { User } from '../user/user.class';

export class Post {
  title: string;
  body: string;
  type: string;
  date: Date;
  author:User;
  messages:string[];
  languages:string[];
  technologies: string;
}

// routerLink="/post/details-post/{{post._id}}"