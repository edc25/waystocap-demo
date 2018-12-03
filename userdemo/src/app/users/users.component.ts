import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  onSelect(user: User): void{
    this.selectedUser = user;
  }
  selectNewUser(): void{
    this.selectedUser = new User();
    this.users = this.users.concat(this.selectedUser);
  }
  sync(): void{
    this.userService.saveUsers(this.users).subscribe(() => this.getUsers());
  }

}
