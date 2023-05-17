import { Component } from '@angular/core';
import { UserService } from 'src/app/api/services/user/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent {
searchUsers: any;
query: any;
results: any;
  
}
