import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor(private http: HttpClient) {
  }

  getImages(page: number): Observable<any> {
    const options = page ?
      {params: new HttpParams().set('page', page).set('per_page', 30).set('client_id', environment.apiKey)} : {}

    return this.http.get('https://api.unsplash.com/photos', options)
  }

}
