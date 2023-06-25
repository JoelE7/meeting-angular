import { Observable, of } from 'rxjs';
import { QuestionPreferenceUser } from 'src/app/modules/project/interfaces/questionPreferenceUser.interface';
import { Post } from 'src/app/shared/models/post/post.class';
import { Project } from 'src/app/shared/models/project/project.class';

export const mockProjectDetails: Project = {
  _id: "1",
  name: 'Menú fácil',
  amountParticipants: 2,
  complexity: 'junior',
  description: 'dsc',
  endDate: new Date(),
  requestSupport: false,
  startDate: new Date(),
  status: 'to do',
  technologies: [],
  type: 'web',
  leader : "",
  participants : [],
  posts : [],
  supports : [],
  urlRepository : "",
  validateSystem : false,
  requests : [],
  roleUser : "leader"
};

export const mockProjectDetailsWithRepository: Project = {
  _id: "1",
  name: 'Menú fácil',
  amountParticipants: 2,
  complexity: 'junior',
  description: 'dsc',
  endDate: new Date(),
  requestSupport: false,
  startDate: new Date(),
  status: 'to do',
  technologies: [],
  type: 'web',
  leader : "",
  participants : [],
  posts : [],
  supports : [],
  urlRepository : "https://github.com",
  validateSystem : false,
  requests : [],
  roleUser : "participant"
};

export const metricProject:any = {
  commitActivity : [],
  commitByUser : [{
    developerUsername : "Joel",
    commits : {
      commitCount : 41,
      commitFrequencyByDay : 2
    }
  }],
  contributionDistributionByType : [
    {
      type : "releases",
      data : [
        {
          quantity : "2"
        }
      ]
    },
    {
      type : "pullRequests",
      data : [
        {
          quantity : "4"
        }
      ]
    },
    {
      type : "issues",
      data : [
        {
          quantity : "6"
        }
      ]
    }

  ]
}



export const mockGetAllProjects: any =  {"results" : [new Project(), new Project(), new Project()],"count" : 3};
export const mockGetSuggestedProjects: any = {"result" : [new Project(), new Project(), new Project()]};

export const mockProjectService: {
  detailsProject: () => Observable<Project>;
  createProject: () => Observable<any>;
  getMetricByProject: () => Promise<any>;
  getAllProjects: () => Observable<any[]>;
  getSuggestedProjects: () => Observable<any[]>;
  detailsProjectAsync: () => Promise<Project>;
} = {
  detailsProject: () => of(mockProjectDetails),
  detailsProjectAsync: () => new Promise((resolve,reject)=>{resolve(mockProjectDetailsWithRepository)}),
  createProject: () => of({}),
  getMetricByProject: () => new Promise((resolve,reject)=>{resolve("")}),
  getAllProjects: () => of(mockGetAllProjects),
  getSuggestedProjects: () => of(mockGetSuggestedProjects),
};
