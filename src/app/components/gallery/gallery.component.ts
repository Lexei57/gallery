import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {tap} from 'rxjs';
import {ImageService} from '../../services/image.service';
import {ImageDetailsComponent} from '../image-details/image-details.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {

  updateMasonryLayout!: boolean
  isSmallImages!: boolean
  masonryOptions = {
    gutter: 5,
    percentPosition: true,
  }

  constructor(
    public imageService: ImageService,
    private router: Router,
    private dialog: MatDialog
    ) {
  }

  ngOnInit(): void {
    this.router.navigate([], {
      queryParams: {collection: null}
    })
  }

  columnsToggle() {
    this.isSmallImages = !this.isSmallImages
    this.updateMasonryLayout = !this.updateMasonryLayout
  }

  openImage(imageId: string) {
    const dialogConfig = new MatDialogConfig()

    dialogConfig.autoFocus = true
    dialogConfig.width = '1400px'
    // dialogConfig.minHeight = '80vh'
    dialogConfig.enterAnimationDuration = 300

    this.imageService.getDetailedImage(imageId).subscribe()

    const dialogRef = this.dialog.open(ImageDetailsComponent, dialogConfig)

    this.router.navigate([], {
      queryParams: {id: imageId}, queryParamsHandling: 'merge'
    })

    dialogRef.afterClosed()
      .pipe(
        tap(() => this.router.navigate([],{
          queryParams: {id: null}, queryParamsHandling: 'merge'
        }))
      ).subscribe()
  }
}
