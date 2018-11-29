import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: "1",
    name: 'Bob',
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/SIPI_Jelly_Beans_4.1.07.tiff/lossy-page1-440px-SIPI_Jelly_Beans_4.1.07.tiff.jpg',
    email: 'bob@bob.com'
  }
  constructor() { }

  ngOnInit() {
  }

}
