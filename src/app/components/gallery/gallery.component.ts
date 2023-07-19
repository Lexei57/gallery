import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {

  updateMasonryLayout!: boolean
  masonryOptions = {
    gutter: 5,
    percentPosition: true,
  }

  constructor(
    public imageService: ImageService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.router.navigate([], {
      queryParams: {collection: null}
    })
  }

  columnsToggle() {
    this.updateMasonryLayout = !this.updateMasonryLayout
  }


}
