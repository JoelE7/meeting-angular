export interface Message {
  _id:     string;
  message: string;
  date:    Date;
  author:  Author;
  post:    string;
  __v:     number;
}

export interface Author {
  _id:         string;
  name:        string;
  email:       string;
  role:        string;
  __v:         number;
  disinterest: string[];
  posts:       string[];
  preferences: string[];
  projects:    any[];
  score:       number;
  supporting:  string[];
  urlImage: string;
}
