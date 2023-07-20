import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {
  BehaviorSubject, delay,
  distinctUntilChanged, filter,
  map,
  Observable,
  of,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap
} from 'rxjs';
import {environment} from '../environments/environment';
import {IImage} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  private images$$: BehaviorSubject<any> = new BehaviorSubject([])
  images$: Observable<any> = this.images$$

  private imageDetails$$: BehaviorSubject<any> = new BehaviorSubject<any>([])
  imageDetails$: Observable<any> = this.imageDetails$$

  searchRequest!: string
  imagePage = 1

  constructor(private http: HttpClient) {
    this.getImages().subscribe()
  }

  getImages(): Observable<IImage[]> {
    const queryOptions = this.imagePage ?
      {params: new HttpParams().set('page', this.imagePage).set('per_page', 30).set('client_id', environment.apiKey)} : {}
    return this.http.get<IImage[]>('https://api.unsplash.com/photos', queryOptions)
      .pipe(
        tap(image => this.images$$.next(image)),
      )
  }

  searchImages(): Observable<IImage[]> {
    const queryOptions = this.searchRequest ?
      {params: new HttpParams().set('page', this.imagePage).set('per_page', 30).set('query', this.searchRequest).set('client_id', environment.apiKey)} : {}
    return this.http.get<IImage[]>('https://api.unsplash.com/search/photos', queryOptions)
      .pipe(
        map((results: any) => results.results),
        tap(images => this.images$$.next(images)),
      )
  }

  getImageDetails(imageId: string): Observable<any> {
    const queryOptions = imageId ?
      {params: new HttpParams().set('client_id', environment.apiKey)} : {}
    return this.http.get(`https://api.unsplash.com/photos/${imageId}`, queryOptions)
      .pipe(
        startWith(null),
        tap(image => this.imageDetails$$.next(image))
      )
  }
}
