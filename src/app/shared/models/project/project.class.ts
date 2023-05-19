export class Project {
  _id: number;
  name: string;
  description: string;
  typeProject: string;
  type: string;
  complexity: string;
  amountParticipants: number;
  participantsId: string;
  liderId: boolean;
  startDate: Date;
  endDate: Date;
  languages: string[];
  technologies: string[];
  status: string;
  requestSupport: Boolean;
}
