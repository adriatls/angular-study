import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedUser: IUser = {} as IUser;
  showUserDetails = false;

  onUserSelected(emmitedValue: IUser) {
    this.selectedUser = emmitedValue;
    this.showUserDetails = true;
  }
}
