import {ChangeDetectionStrategy, Component, NgZone} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { DataService } from '../data.service';

export class Note {
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
  constructor(private sharedService: DataService, private _ngZone: NgZone) {}

  noteList : Note[ ] = [new Note("hello", new Date(Date.now()), "hello")];
  ngOnInit() {
    // this.add(new Note("hehe", new Date(Date.now()), "hehe"));
    this.sharedService.data$.subscribe(
      value => (value == null) ? console.log : this.add(value)
    );

    console.log(this.noteList);
  }
  add(newData : Note) {
  
      this.noteList.push(newData);
      
    // console.log("adding something");
    // console.log(newData);
    

    // console.log("notelist: " + this.noteList);
    // console.log(this.noteList[2]);
  }
  del(idx: number) {
    delete this.noteList[idx];
  }
}
