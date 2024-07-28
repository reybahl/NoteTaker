import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Note, NotecardComponent } from '../notecard/notecard.component';
import { DataService } from '../data.service';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrl: 'dialogform.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOverviewExample {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule
  ],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);

  constructor(private dataService: DataService) {}

  personForm = new FormGroup({
    name: new FormControl("name"),
    note: new FormControl("note")
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendData(note : Note) {
    this.dataService.addData(note);
  }

  onSubmit() {
    console.log(this.personForm.value);
    this.sendData(new Note(this.personForm.value.name ? this.personForm.value.name : "", new Date(), this.personForm.value.note ? this.personForm.value.note : ""))
    this.dialogRef.close();
  }

}