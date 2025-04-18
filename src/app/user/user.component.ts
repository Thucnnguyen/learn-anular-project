import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUsers = DUMMY_USERS[0];
  
  //set getpath for image path
  get imagePath() {
    return `assets/users/${this.selectedUsers.avatar}`;
  }

  //On clink user button
  onClickUser(){
    console.log("User clicked!");
  }
  
}
 