import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss']
})
export class WhoComponent {
  faUsers = faUsers
}
