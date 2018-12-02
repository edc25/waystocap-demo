import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() user:User
  ngOnInit() {
  }

  save(): void{
    this.userService.saveUser(this.user).subscribe(() => window.alert('saved'));
  }

}
