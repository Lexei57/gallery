import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {GalleryComponent} from './gallery.component';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CommonModule
  ]
})

export class GalleryModule {}
