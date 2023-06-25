import { Observable, of } from "rxjs";
import { Item } from "src/app/shared/models/model-forms/item-form.interface";
import { userMock, userMock2, userMock3, userMock4, userMock5 } from "../../models/user/user.mock.model";
import { QuestionPreferenceUser } from "src/app/modules/project/interfaces/questionPreferenceUser.interface";
import { mockProjectDetails } from "../project/project.service.mock";
import { Post } from "src/app/shared/models/post/post.class";


export const mockTechnologies:Item[]=[
    {
        label : "Angular",
        value : "Angular"
    },
    {
        label : "Java",
        value : "Java"
    },
    {
        label : "C",
        value : "C"
    }
]

export const mockGetAllUser = [userMock,userMock2,userMock3,userMock4,userMock5]
export const mockGetAllUserRanking = {result : [userMock,userMock2,userMock3,userMock4,userMock5], count : 4}

export const questionUserTechnologie:QuestionPreferenceUser = {
    result : {
      question : "¿Te gustaría aprender react?",
      technologie : "React",
      results : []
    },
    type : "project"
  }
  export const questionUserPost:QuestionPreferenceUser = {
    result : {
      question : "¿Te gustaría aprender react?",
      technologie : "React",
      results : [new Post(), new Post()]
    },
    type : "post"
  }
  export const questionUserProject:QuestionPreferenceUser = {
    result : {
      question : "¿Te gustaría aprender react?",
      technologie : "React",
      results : [mockProjectDetails]
    },
    type : "project"
  }

export const mockUserService: {
    sendMailContact: () => Observable<any>;
    getAllUser: () => Observable<any>;
    getAllUsersByRanking: () => Observable<any>;
    updateUser: () => Observable<any>;
    getLanguagesGithub: () => Promise<any>;
    getCommitsByUserGithub: () => Promise<any>;
    detailsUserAsync: () => Promise<any>;
    getRecommendationQuestionUser: ()=> Observable<QuestionPreferenceUser>
    
  
  } = {
    sendMailContact: () => of({}),
    updateUser: () => of({}),
    getLanguagesGithub: () => new Promise((resolve,reject)=>{resolve("")}),
    getCommitsByUserGithub: () => new Promise((resolve,reject)=>{resolve("")}),
    detailsUserAsync: () => new Promise((resolve,reject)=>{resolve(userMock)}),
    getAllUser: () => of(mockGetAllUser),
    getAllUsersByRanking: () => of(mockGetAllUserRanking),
    getRecommendationQuestionUser : ()=> of(questionUserProject)
    
  };