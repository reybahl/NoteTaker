import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgFor } from '@angular/common';

class Note {
  title: string;
  date: Date;
  text: string;
  constructor(title:string, date:Date, text:string) {
    this.title = title;
    this.date = date;
    this.text = text;
  }

  getDateString() {
    return `${this.date.getMonth()}/${this.date.getDay()}/${this.date.getFullYear()}`;
  }
};

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
  noteList : Note[] = [new Note("hello", new Date(Date.now()), "hello")];
  ngOnInit() {
    this.noteList.push(new Note("hehe", new Date(Date.now()), "hehe"));
  }
  del(idx: number) {
    delete this.noteList[idx];
  }
}
