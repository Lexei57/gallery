import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent {


  constructor(
    public imageService: ImageService,
    private router: Router,
    private route: ActivatedRoute
    ) {
  }

  switchToPreviousPage() {
    this.imageService.imagePage--
    this.updatePage()
    this.router.navigate([], {
      queryParams : {page: this.imageService.imagePage}, queryParamsHandling: 'merge'
    })
  }

  switchToNextPage() {
    this.imageService.imagePage++
    this.updatePage()
    this.router.navigate([], {
      queryParams : {page: this.imageService.imagePage}, queryParamsHandling: 'merge'
    })
  }

  updatePage() {
    if (this.route.snapshot.queryParamMap.has('search_request')) {
      this.imageService.searchImages('water').subscribe()
    } else {
      this.imageService.getImages().subscribe()
    }
  }

}
