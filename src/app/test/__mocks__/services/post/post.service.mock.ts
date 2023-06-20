import { Observable, of } from "rxjs";
import { Post } from "src/app/shared/models/post/post.class";


export const mockPostDetails: Post = {
    _id: "1",
    author : "",
    body :"mensaje",
    date : new Date(),
    messages :[],
    random : 1,
    technologies : [],
    title : "Prueba post",
    type : "informative",
  };

  export const mockGetAllPost = {posts :[new Post(),new Post(), new Post()],count: 4 }
  

export const mockPostService: {
    detailsPost: () => Observable<Post>;
    createPost: () => Observable<any>;
    createMessage: () => Observable<any>;
    getAllPost: () => Observable<any>;
    // getSuggestedProjects: () => Observable<any[]>;
    // detailsProjectAsync: () => Promise<Project>;
  } = {
    detailsPost: () => of(mockPostDetails),
    // detailsProjectAsync: () => new Promise((resolve,reject)=>{resolve(mockProjectDetails)}),
    createPost: () => of({}),
    createMessage: () => of({}),
    getAllPost: () => of(mockGetAllPost),
    // getSuggestedProjects: () => of(mockGetSuggestedProjects),
  };