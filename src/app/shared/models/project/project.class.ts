//TODO: Refactorizar esto a:
  /*
    typeProject no va mas
    participantsID por participants (deberias poner que puede ser string[] o [{}] )
    liderId por lider (deberias poner que puede ser string o {} )
    lenguages no existe mas
    agrega un campo supports con las mismas caracteristicas que participants
    agrega un campo posts con las mismas caracteristicas que participants
  */
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
