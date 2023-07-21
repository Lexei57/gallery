import {ChangeDetectionStrategy, Component} from '@angular/core';
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
  ) {
  }


}
