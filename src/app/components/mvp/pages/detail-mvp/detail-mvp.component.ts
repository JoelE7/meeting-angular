import { Component } from '@angular/core';
import { Task } from '../../../../components/project/interfaces/tasks.interface';

@Component({
  selector: 'app-detail-mvp',
  templateUrl: './detail-mvp.component.html',
  styleUrls: ['./detail-mvp.component.css']
})
export class DetailMvpComponent {
  integrants: [{'1'},{'2'}];
  users = [
    {
      name: 'Joel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 1, message: 'Home Page', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 2, message: 'Agrego Estilos', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 3, message: 'Agrego Tests', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' }
      ]
    },
    {
      name: 'Nahuel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 1, message: 'Agrego funcionalidad crear usuario' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 2, message: 'Modifico diseño', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 3, message: 'Agrego test', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444'}
      ]
    },
    {
      name: 'Ezequiel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 4, message: 'Crear MVP' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 5, message: 'Agrego Test' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444'}
      ]
    },
    {
      name: 'Jessica',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 6, message: 'Crear Proyecto' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 7, message: 'Agrego Graficos' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 8, message: 'Ajustes y estilos' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 9, message: 'Tests' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' }
      ]
    },
    {
      name: 'Diego',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 6, message: 'Modal' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 7, message: 'Tests' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' }
      ]
    }
  ];
  tasks: Task[] = [
    {
      numberTask: '1',
      name: 'CRUD de Tareas',
      status: 'IN_PROCESS',
      assignedMember: 'Joel',
    },
    {
      numberTask: '2',
      name: 'CRUD de Mvp',
      status: 'FINALIZED',
      assignedMember: 'Ezequiel',
    },
    {
      numberTask: '3',
      name: 'CRUD de Usuarios',
      status: 'NOTASSIGNED',
    },
  ];

}
