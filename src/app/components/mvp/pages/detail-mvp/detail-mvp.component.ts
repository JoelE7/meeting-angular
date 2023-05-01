import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-mvp',
  templateUrl: './detail-mvp.component.html',
  styleUrls: ['./detail-mvp.component.css']
})
export class DetailMvpComponent {
  users = [
    {
      name: 'Joel',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 1, message: 'Commit 1', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 2, message: 'Commit 2', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 3, message: 'Commit 3', url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' }
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
        { id: 4, message: 'Commit 4' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 5, message: 'Commit 5' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444'}
      ]
    },
    {
      name: 'Jessica',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 6, message: 'Commit 6' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 7, message: 'Commit 7' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 8, message: 'Commit 8' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 9, message: 'Commit 9' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' }
      ]
    },
    {
      name: 'Diego',
      avatarUrl: 'https://via.placeholder.com/150x150',
      commits: [
        { id: 6, message: 'Commit 6' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 7, message: 'Commit 7' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 8, message: 'Commit 8' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' },
        { id: 9, message: 'Commit 9' , url: 'https://github.com/JoelE7/meeting-frontend/commit/4d14c44f0afe0872f0ba4a2563e4388212ffe444' }
      ]
    }
  ];
}
