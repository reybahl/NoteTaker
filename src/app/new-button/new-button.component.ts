import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-new-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './new-button.component.html',
  styleUrl: './new-button.component.css'
})
export class NewButtonComponent {

}
