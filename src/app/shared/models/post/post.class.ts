import { Message } from '../message/message.interface';
import { Project } from '../project/project.class';
import { User } from '../user/user.class';

export class Post {
  _id: string | number
  title: string;
  body: string;
  type: string;
  date: Date;
  author: any  ;
  messages: Message[];
  technologies: string[];
  random:any;
  project?:Project;
 
}