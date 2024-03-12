import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCustomListComponent } from '../post-custom-list/post-custom-list.component';
import { UserCustomListComponent } from '../user-custom-list/user-custom-list.component';

@Component({
  selector: 'app-custom-wrapper',
  standalone: true,
  imports: [CommonModule, PostCustomListComponent, UserCustomListComponent],
  templateUrl: './custom-wrapper.component.html',
  styleUrls: ['./custom-wrapper.component.scss']
})
export class CustomWrapperComponent {

}
