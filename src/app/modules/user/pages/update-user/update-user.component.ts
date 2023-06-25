import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/api/services/auth/auth.service';
import { UserService } from 'src/app/api/services/user/user.service';
import { User } from 'src/app/shared/models/user/user.class';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  searchUser:User;

  spinner = true;

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute,
     private messageService:MessageService,private route:Router){

  }

  async ngOnInit(): Promise<void> {
    let { id } = this.activatedRoute.snapshot.params;
    await this.getUser(id);
  }


  async getUser(id:string){
    this.searchUser = await this.userService.detailsUserAsync(id);
    this.spinner = false;
  }

  updateUser(user:User){
    this.userService.updateUser(user).subscribe(({
      next : (data)=>{
        this.messageService.add({
          severity: 'success',
          summary: '¡Hecho!',
          detail: 'El usuario fue actualizado con exito',
        });
        this.route.navigate(['/user/see-my-profile/' + this.searchUser._id])
      },
      error : (err)=>{
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error ? err.error.message : 'Ups! ocurrio un error',
        });
      }
    }))
  }

}
