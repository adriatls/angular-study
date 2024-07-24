import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUserList } from './utils/filter.users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userList: IUser[] = [];
  userListFiltered: IUser[] = [];
  selectedUser: IUser = {} as IUser;
  showUserDetails = false;

  ngOnInit(): void {
    this.userList = UsersList;
    this.userListFiltered = UsersList;
  }

  onFilter(emmitedValue: IFilterOptions) {
    this.userListFiltered = filterUserList(emmitedValue, this.userList);
  }

  onUserSelected(emmitedValue: IUser) {
    this.selectedUser = emmitedValue;
    this.showUserDetails = true;
  }
}
