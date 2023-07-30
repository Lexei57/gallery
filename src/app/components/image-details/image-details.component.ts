import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {ImageService} from '../../services/image.service';
import {dialogOpen} from './image-details.animations';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss'],
  animations: [dialogOpen],
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
