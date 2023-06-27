import { Observable, of } from "rxjs";
import { Item } from "src/app/shared/models/model-forms/item-form.interface";


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

export const mockDataService: {
    getTechnologies: () => Observable<any>;
  } = {
    getTechnologies: () => of({technologies : mockTechnologies,technologiesLength : mockTechnologies.length}),
  };