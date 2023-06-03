import { Observable, of } from 'rxjs';
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
};

export const mockGetAllProjects: any =  {"results" : [new Project(), new Project(), new Project()],"count" : 3};
export const mockGetSuggestedProjects: any = {"result" : [new Project(), new Project(), new Project()]};

export const mockProjectService: {
  detailsProject: () => Observable<Project>;
  createProject: () => Observable<any>;
  getAllProjects: () => Observable<any[]>;
  getSuggestedProjects: () => Observable<any[]>;
  detailsProjectAsync: () => Promise<Project>;
} = {
  detailsProject: () => of(mockProjectDetails),
  detailsProjectAsync: () => new Promise((resolve,reject)=>{resolve(mockProjectDetails)}),
  createProject: () => of({}),
  getAllProjects: () => of(mockGetAllProjects),
  getSuggestedProjects: () => of(mockGetSuggestedProjects),
};
