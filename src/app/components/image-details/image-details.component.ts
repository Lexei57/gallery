import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent {

  constructor(
    private dialogRef: MatDialogRef<ImageDetailsComponent>
  ) {
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
