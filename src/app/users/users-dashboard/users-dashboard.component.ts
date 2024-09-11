import { Component } from '@angular/core';
import { IUser } from '../iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  users_list: IUser[] = []

  selected_user:IUser = {
    id: 0,
    name: "Usuario",
    username: "user",
    phone: "0000000000",
    website: "website"
  }

  message: string = "Miguel Angel Gutierrez Gomez"

  constructor(private _service: UserService){

    this._service.getAll().subscribe(
      response => this.users_list = response
    )

   }

   seleccionar_usuario(user: IUser): void{
    this.selected_user = user;
   }

   eventoRecibido(message: string){
    this.message = message
   }

}