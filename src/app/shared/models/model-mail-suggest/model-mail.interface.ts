import { Post } from "../post/post.class"
import { User } from "../user/user.class"

export interface MailSuggest{
  user:User,
  email:string,
  message: string,
  post?:Post,
}