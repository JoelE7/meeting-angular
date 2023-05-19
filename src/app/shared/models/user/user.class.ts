import { Post } from '../post/post.class';
import { Project } from '../project/project.class';

export class User {
  _id: string;
  name: string;
  password?: string;
  email: string;
  role: string;
  avatarUrl: string;
  skills: any;
  preferences: string[] = [];
  disinterest: string[] = [];
  score: string | number;
  projects: Project[] = [];
  posts: Post[] = [];
}
