import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  fullName = `${this.firstName} ${this.lastName}`;
  constructor() {}

  ngOnInit(): void {}
}
