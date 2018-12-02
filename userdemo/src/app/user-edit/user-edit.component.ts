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

  onSelectFile(event){
    if (event.target.files && event.target.files[0])
    {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      let userToAlter = this.user;
      let fileType = event.target.files[0].fileType;
      reader.onload = function(){
        
        let fullText = reader.result.toString();
        let splitOutHeader = fullText.split(',',2);

        let fileText = splitOutHeader[1];
        let mimeType = splitOutHeader[0].split(';',2)[0].split(':',2)[1];
        userToAlter.image = fileText;
        userToAlter.imageType = mimeType;
        userToAlter.imageChanged = true;
      }
      
    }
  }

}
