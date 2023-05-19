import { User } from '../user/user.class';

export class Post {
  _id: string | number
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