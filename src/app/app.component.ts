import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';

  users = DUMMY_USERS;
  selectedUserName?: string;
  selectedUserId?: string;

  private selectedUser(userId:string ) {
    return this.users.find(user => user.id === userId);
  }

  onSelectedUser(userId: string) {
    this.selectedUserName = this.selectedUser(userId)?.name;
    this.selectedUserId = userId;
  }
}
