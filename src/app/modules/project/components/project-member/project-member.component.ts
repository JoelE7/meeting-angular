import { Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-project-member',
  templateUrl: './project-member.component.html',
  styleUrls: ['./project-member.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ProjectMemberComponent implements OnInit,DoCheck{

  users = [
    {
      name: 'Joel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 1,
          message: 'Home Page',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 2,
          message: 'Agrego Estilos',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 3,
          message: 'Agrego Tests',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Nahuel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 1,
          message: 'Agrego funcionalidad crear usuario',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 2,
          message: 'Modifico diseño',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 3,
          message: 'Agrego test',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Ezequiel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 4,
          message: 'Crear MVP',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 5,
          message: 'Agrego Test',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Jessica',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 6,
          message: 'Crear Proyecto',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 7,
          message: 'Agrego Graficos',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 8,
          message: 'Ajustes y estilos',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 9,
          message: 'Tests',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Diego',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 6,
          message: 'Modal',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 7,
          message: 'Tests',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
  ];

  supports = [
    {
      name: 'Alejandro',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 1,
          message: 'Home Page',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 2,
          message: 'Agrego Estilos',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 3,
          message: 'Agrego Tests',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Marcelo',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 1,
          message: 'Agrego funcionalidad crear usuario',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 2,
          message: 'Modifico diseño',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 3,
          message: 'Agrego test',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Juan',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 4,
          message: 'Crear MVP',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 5,
          message: 'Agrego Test',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Sebastian',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 6,
          message: 'Crear Proyecto',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 7,
          message: 'Agrego Graficos',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 8,
          message: 'Ajustes y estilos',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 9,
          message: 'Tests',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
    {
      name: 'Matias',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        {
          id: 6,
          message: 'Modal',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
        {
          id: 7,
          message: 'Tests',
          url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444',
        },
      ],
    },
  ];

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

  @Input()
  user:User;

  @Output()
  eventEmitterUserProgress:EventEmitter<string> = new EventEmitter();

  seeProgress(user:User){
    this.eventEmitterUserProgress.emit(user._id)
  }
}
