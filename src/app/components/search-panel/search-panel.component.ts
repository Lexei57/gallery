import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {

  constructor(
    public imageService: ImageService,
    private router: Router
    ) {
  }

  searchImages() {
    this.imageService.imagePage = 1
    this.imageService.searchImages().subscribe(() => {
      this.router.navigate([], {
        queryParams: {
          search_request: this.imageService.searchRequest,
          page: 1
        }
      })
    })
  }

}
