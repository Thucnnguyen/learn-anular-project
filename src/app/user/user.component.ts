import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!:User;
  @Output() userClicked = new EventEmitter<string>();
  
  imagePath!: string;
  //set getpath for image path
  ngOnInit() {
    this.imagePath = `assets/users/${this.user.avatar}`;
  }

  //On clink user button
  onClickUser() {
    //return user ID to get tasks
    this.userClicked.emit(this.user.id);
  }
}
