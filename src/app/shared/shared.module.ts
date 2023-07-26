import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxMasonryModule} from 'ngx-masonry';
import {ImageDetailsComponent} from '../components/image-details/image-details.component';
import {MessagesComponent} from '../components/messages/messages.component';
import {SearchPanelComponent} from '../components/search-panel/search-panel.component';
import {SwitcherComponent} from '../components/switcher/switcher.component';

@NgModule({
  declarations: [
    SwitcherComponent,
    SearchPanelComponent,
    ImageDetailsComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    NgxMasonryModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    NgxMasonryModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,

    ImageDetailsComponent,
    SwitcherComponent,
    SearchPanelComponent,
    MessagesComponent
  ]
})

export class SharedModule {}
