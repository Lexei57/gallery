import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageDetailsComponent {

  imageDetails$: Observable<any> = this.imageService.imageDetails$

  constructor(
    public imageService: ImageService,
    private dialogRef: MatDialogRef<ImageDetailsComponent>
  ) {
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
