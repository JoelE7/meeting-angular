import { Post } from '../post/post.class';
import { User } from '../user/user.class';

export class Project {
  _id: string;
  name: string;
  description: string;
  type: string;
  complexity: string;
  amountParticipants: number;
  leader: any | User;
  participants: any;
  supports: any;
  posts: any= [];
  startDate: Date;
  endDate: Date;
  technologies: string[];
  status: string;
  requestSupport: Boolean;
  urlRepository:string;
}
