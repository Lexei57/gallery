import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NgxMasonryModule} from 'ngx-masonry';

@NgModule({
  imports: [
    NgxMasonryModule,
    HttpClientModule
  ],
  exports: [
    NgxMasonryModule,
    HttpClientModule
  ]
})

export class SharedModule {}
