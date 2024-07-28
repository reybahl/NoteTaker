import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from './notecard/notecard.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  addData(newData: Note) {
    this.dataSubject.next(newData);
  }
}
