import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userList: IUser[] = [];
  selectedUser: IUser = {} as IUser;
  showUserDetails = false;

  ngOnInit(): void {
    this.userList = UsersList;
  }

  onUserSelected(emmitedValue: IUser) {
    this.selectedUser = emmitedValue;
    this.showUserDetails = true;
  }
}
