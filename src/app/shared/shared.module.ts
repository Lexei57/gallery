import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxMasonryModule} from 'ngx-masonry';
import {SearchPanelComponent} from '../components/search-panel/search-panel.component';
import {SwitcherComponent} from '../components/switcher/switcher.component';

@NgModule({
  declarations: [
    SwitcherComponent,
    SearchPanelComponent,
  ],
  imports: [
    NgxMasonryModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NgxMasonryModule,
    HttpClientModule,
    FormsModule,

    SwitcherComponent,
    SearchPanelComponent,
  ]
})

export class SharedModule {}
