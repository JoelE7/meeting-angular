import { Component } from '@angular/core';

interface Developer {
  name: string;
  avatarUrl: string;
  score: number;
  skills: string[];
}
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  developers: Developer[] = [
    {
      "name": "Desarrollador 1",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 100,
      "skills": ["fab fa-js", "fab fa-angular", "fab fa-node-js"]
    },
    {
      "name": "Desarrollador 2",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 90,
      "skills": ["fab fa-java", "fas fa-database", "fab fa-spring"]
    },
    {
      "name": "Desarrollador 3",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 80,
      "skills": ["fab fa-python", "fas fa-database", "fab fa-php"]
    },
    // ...
  ];
}
