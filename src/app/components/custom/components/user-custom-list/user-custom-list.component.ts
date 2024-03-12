import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CustomService } from '../../service/custom.service';

@Component({
  selector: 'app-user-custom-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-custom-list.component.html',
  styleUrls: ['./user-custom-list.component.scss']
})
export class UserCustomListComponent {

  userList$ !: Observable<any>;
  private customService = inject(CustomService);

  constructor() {
    this.customService.getAll();
  }
}
