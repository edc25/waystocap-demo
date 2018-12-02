import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  // user: User = {
  //   id: "1",
  //   name: 'Bob',
  //   avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/SIPI_Jelly_Beans_4.1.07.tiff/lossy-page1-440px-SIPI_Jelly_Beans_4.1.07.tiff.jpg',
  //   email: 'bob@bob.com'
  // }

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

}
