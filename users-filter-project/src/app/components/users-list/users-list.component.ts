import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({required: true, alias: 'userList'})
  usersList: IUser[] = [];

  displayedColumns = ['name', 'date', 'status'];

  @Output('onUserSelected') clickEmmiter = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.clickEmmiter.emit(user);
  }
}
