import {DialogRef} from '@angular/cdk/dialog';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
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
    private dialogRef: MatDialogRef<ImageDetailsComponent>,
    private router: Router
  ) {
  }

  searchImagesByTag(tag: string) {
    this.imageService.imageTag = tag
    this.imageService.imagePage = 1
    this.imageService.searchImagesByTag().subscribe()
    this.router.navigate([], {
      queryParams: {
        tag: tag,
        page: 1
      }
    })
    this.dialogRef.close()
  }


}
