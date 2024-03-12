import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-custom-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-custom-list.component.html',
  styleUrls: ['./user-custom-list.component.scss']
})
export class UserCustomListComponent {

  userList$ !: Observable<any>;

  constructor() {

  }
}
