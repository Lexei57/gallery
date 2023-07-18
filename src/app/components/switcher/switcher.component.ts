import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {

  constructor(
    public imageService: ImageService,
    private router: Router
    ) {
  }

  switchToPreviousPage() {
    this.imageService.imagePage--
    this.imageService.updatePage()
    this.router.navigate([], {
      queryParams : {page: this.imageService.imagePage}
    })
  }

  switchToNextPage() {
    this.imageService.imagePage++
    this.imageService.updatePage()
    this.router.navigate([], {
      queryParams : {page: this.imageService.imagePage}
    })
  }

}
