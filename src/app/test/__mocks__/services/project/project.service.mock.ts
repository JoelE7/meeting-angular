import { Observable, of } from 'rxjs';
import { Project } from 'src/app/shared/models/project/project.class';

export const mockProjectDetails: Project = {
  _id: 1,
  name: 'Menú fácil',
  amountParticipants: 2,
  complexity: 'junior',
  description: 'dsc',
  endDate: new Date(),
  languages: [],
  liderId: false,
  participantsId: '5',
  requestSupport: false,
  startDate: new Date(),
  status: 'to do',
  technologies: [],
  type: 'web',
  typeProject: 'web',
};

export const mockGetAllProjects: Project[] = [new Project(), new Project()];

export const mockProjectService: {
  detailsProject: () => Observable<Project>;
  createProject: () => Observable<any>;
  getAllProjects: () => Observable<Project[]>;
} = {
  detailsProject: () => of(mockProjectDetails),
  createProject: () => of({}),
  getAllProjects: () => of(mockGetAllProjects),
};
