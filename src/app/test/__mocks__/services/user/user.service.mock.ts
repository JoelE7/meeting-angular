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
    getRecommendationQuestionUser: ()=> Observable<QuestionPreferenceUser>
  
  } = {
    sendMailContact: () => of({}),
    getAllUser: () => of(mockGetAllUser),
    getRecommendationQuestionUser : ()=> of(questionUserProject)
  };