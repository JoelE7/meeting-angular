import { Post } from "../post/post.class"
import { Project } from "../project/project.class"
import { User } from "../user/user.class"

export interface MailSuggest{
  user:User,
  email:string,
  message: string,
  post?:Post,
  project?:Project
}