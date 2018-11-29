import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.less']
})
export class UserDetailComponent implements OnInit {
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
