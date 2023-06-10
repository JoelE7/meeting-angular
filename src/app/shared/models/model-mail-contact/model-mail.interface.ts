import { User } from "../user/user.class"

export interface Mail{
  user:User,
  email:string,
  message: string
}