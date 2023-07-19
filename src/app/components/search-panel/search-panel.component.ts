import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {
  searchRequest: any;

  constructor(
    private imageService: ImageService,
    private router: Router
    ) {
  }

  searchImages() {
    this.imageService.searchImages(this.searchRequest).subscribe(() => {
      this.router.navigate([], {
        queryParams: {search_request: this.searchRequest}, queryParamsHandling: 'merge'
      })
    })
  }

}
