import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NgxMasonryModule} from 'ngx-masonry';
import {SwitcherComponent} from '../components/switcher/switcher.component';

@NgModule({
  declarations: [
    SwitcherComponent
  ],
  imports: [
    NgxMasonryModule,
    HttpClientModule
  ],
  exports: [
    NgxMasonryModule,
    HttpClientModule,
    SwitcherComponent
  ]
})

export class SharedModule {}
