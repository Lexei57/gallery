import {DialogRef} from '@angular/cdk/dialog';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageDetailsComponent {

  constructor(
    public imageService: ImageService,
    private dialogRef: MatDialogRef<ImageDetailsComponent>
  ) {
  }

  searchImagesByTag(tag: string) {
    this.imageService.searchImagesByTag(tag).subscribe()
    this.dialogRef.close()
  }


}
