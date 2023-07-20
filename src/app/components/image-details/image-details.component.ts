import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent {

  constructor(
    public imageService: ImageService,
    private dialogRef: MatDialogRef<ImageDetailsComponent>
  ) {
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
