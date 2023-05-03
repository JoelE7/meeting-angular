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
      "name": "Ezequiel Sanson",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 100,
      "skills": ["fab fa-js", "fab fa-angular", "fab fa-node-js"]
    },
    {
      "name": "Nahuel Savedra",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 90,
      "skills": ["fab fa-java", "fas fa-database", "fab fa-spring"]
    },
    {
      "name": "Jessica Delgado",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 80,
      "skills": ["fab fa-python", "fas fa-database", "fab fa-php"]
    },
    {
      "name": "Ezequiel Sanson",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 80,
      "skills": ["fab fa-js", "fab fa-angular", "fab fa-node-js"]
    },
    {
      "name": "Nahuel Savedra",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 80,
      "skills": ["fab fa-java", "fas fa-database", "fab fa-spring"]
    },
    {
      "name": "Jessica Delgado",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 80,
      "skills": ["fab fa-python", "fas fa-database", "fab fa-php"]
    },
    {
      "name": "Ezequiel Sanson",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 70,
      "skills": ["fab fa-js", "fab fa-angular", "fab fa-node-js"]
    },
    {
      "name": "Nahuel Savedra",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 60,
      "skills": ["fab fa-java", "fas fa-database", "fab fa-spring"]
    },
    {
      "name": "Jessica Delgado",
      "avatarUrl": "https://via.placeholder.com/150x150",
      "score": 40,
      "skills": ["fab fa-python", "fas fa-database", "fab fa-php"]
    },
    // ...
  ];
}
