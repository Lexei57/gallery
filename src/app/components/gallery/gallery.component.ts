import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  imagePage = 1
  mainImages$!: Observable<any>

  updateMasonryLayout!: boolean
  masonryOptions = {
    gutter: 5,
    percentPosition: true,
  }

  constructor(private imageService: ImageService) {
    this.mainImages$ = this.imageService.getImages(this.imagePage)
  }

  columnsToggle() {
    this.updateMasonryLayout = !this.updateMasonryLayout
  }

}
