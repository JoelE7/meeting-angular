import { User } from 'src/app/shared/models/user/user.class';

export const userMock: User = {
  _id: '1',
  name: 'Joel',
  avatarUrl: '',
  disinterest: [],
  email: 'joelmock@gmail.com',
  githubUsername: 'joelGithub',
  posts: [],
  preferences: [],
  projects: [],
  role: 'Front',
  score: 10,
  skills: [],
  password: '1234',
  level: 'level',
  random: '1',
  technologies: [],
  urlImage: '',
};
export const userMock2: User = {
  _id: '2',
  name: 'Jessica',
  avatarUrl: '',
  disinterest: [],
  email: 'jessicamock@gmail.com',
  githubUsername: 'jessicaGithub',
  posts: [],
  preferences: [],
  projects: [],
  role: 'Front',
  score: 10,
  skills: [],
  password: '1234',
  level: 'level',
  random: '2',
  technologies: [],
};
export const userMock3: User = {
  _id: '3',
  name: 'Diego',
  avatarUrl: '',
  disinterest: [],
  email: 'diegomock@gmail.com',
  githubUsername: '',
  gitlabUsername: '',
  posts: [],
  preferences: [],
  projects: [],
  role: 'Front',
  score: 10,
  skills: [],
  password: '1234',
  level: 'level',
  random: '3',
  technologies: [],
};
export const userMock4: User = {
  _id: '4',
  name: 'Ezequiel',
  avatarUrl: '',
  disinterest: [],
  email: 'ezequielmock@gmail.com',
  githubUsername: 'ezequielGithub',
  posts: [],
  preferences: [],
  projects: [],
  role: 'Back',
  score: 10,
  skills: [],
  password: '1234',
  level: 'level',
  random: '4',
  technologies: [],
};
export const userMock5: User = {
  _id: '5',
  name: 'Nahuel',
  avatarUrl: '',
  disinterest: [],
  email: 'nahuelmock@gmail.com',
  githubUsername: 'nahuelGithub',
  posts: [],
  preferences: [],
  projects: [],
  role: 'Back',
  score: 10,
  skills: [],
  password: '1234',
  level: 'level',
  random: '5',
  technologies: [],
};

export const userMockMetric = {
  githubMetrics: {
    issues: 2,
    pullRequests: 1,
    projectStats: {
      averagePopularity: 0,
      maxStars: 0,
    },
    quantityProjects: {
      quantityPersonalProjects: 21,
      quantityOutsidelProjects: 9,
    },
    commitCounts: [
      {
        nameRepository: 'APIREST-postman',
        quantityCommits: 1,
      },
    ],
  },
  gitlabMetrics: {
    issues: 2,
    pullRequests: 1,
    projectStats: {
      averagePopularity: 0,
      maxStars: 0,
    },
    quantityProjects: {
      quantityPersonalProjects: 21,
      quantityOutsidelProjects: 9,
    },
    commitCounts: [
      {
        nameRepository: 'APIREST-postman',
        quantityCommits: 1,
      },
    ],
  }
};
