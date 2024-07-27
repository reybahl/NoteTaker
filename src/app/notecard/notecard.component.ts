import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgFor } from '@angular/common';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'notecard',
  templateUrl: 'notecard.component.html',
  styleUrl: 'notecard.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotecardComponent {
}
