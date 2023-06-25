import { Observable, of } from 'rxjs';
import { Post } from 'src/app/shared/models/post/post.class';

export const mockPostDetails: Post = {
  _id: '1',
  author: '',
  body: 'mensaje',
  date: new Date(),
  messages: [],
  random: 1,
  technologies: [],
  title: 'Prueba post',
  type: 'informative',
  experience: [
    {
      nameTechnologie: 'React',
      experience: 'Trainee',
    },
  ],
};
export const mockPostDetails2: Post = {
  _id: '2',
  author: '',
  body: 'mensaje',
  date: new Date(),
  messages: [],
  random: 1,
  technologies: [],
  title: 'Prueba post',
  type: 'informative',
  experience: [
    {
      nameTechnologie: 'Angular',
      experience: 'Semi senior',
    },
  ],
};
export const mockPostDetails3: Post = {
  _id: '3',
  author: '',
  body: 'mensaje',
  date: new Date(),
  messages: [],
  random: 1,
  technologies: [],
  title: 'Prueba post',
  type: 'informative',
  experience: [
    {
      nameTechnologie: 'Express',
      experience: 'Senior',
    },
  ],
};
export const mockPostDetails4: Post = {
  _id: '4',
  author: '',
  body: 'mensaje',
  date: new Date(),
  messages: [],
  random: 1,
  technologies: [],
  title: 'Prueba post',
  type: 'informative',
  experience: [
    {
      nameTechnologie: 'Java',
      experience: 'Junior',
    },
  ],
};

export const mockGetAllPost = {
  results: [
    mockPostDetails,
    mockPostDetails2,
    mockPostDetails3,
    mockPostDetails4,
  ],
  count: 4,
};

export const mockPostService: {
  detailsPost: () => Observable<Post>;
  createPost: () => Observable<any>;
  createMessage: () => Observable<any>;
  getAllPost: () => Observable<any>;
  sendMailSuggestPost: () => Observable<any>;
  // getSuggestedProjects: () => Observable<any[]>;
  // detailsProjectAsync: () => Promise<Project>;
} = {
  detailsPost: () => of(mockPostDetails),
  // detailsProjectAsync: () => new Promise((resolve,reject)=>{resolve(mockProjectDetails)}),
  createPost: () => of({}),
  createMessage: () => of({}),
  getAllPost: () => of(mockGetAllPost),
  sendMailSuggestPost: () => of({}),
  // getSuggestedProjects: () => of(mockGetSuggestedProjects),
};
