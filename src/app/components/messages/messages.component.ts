import {Component, OnInit} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {MessagesService} from '../../services/messages-service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  showMessage = false
  errors$!: Observable<string[]>

  constructor(private messageService: MessagesService) {
  }

  ngOnInit(): void {
    this.errors$ = this.messageService.errors$
      .pipe(
        tap(() => this.showMessage = true)
      )
  }
}
