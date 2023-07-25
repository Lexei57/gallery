import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {
  BehaviorSubject, map, Observable, startWith, tap
} from 'rxjs';
import {environment} from '../environments/environment';
import {IImage, IImageDetailResponse, IImageListResponse} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  private images$$: BehaviorSubject<IImage[]> = new BehaviorSubject<IImage[]>([])
  images$: Observable<IImage[]> = this.images$$

  private imageDetails$$: BehaviorSubject<IImageDetailResponse | null> = new BehaviorSubject<IImageDetailResponse | null>(null)
  imageDetails$: Observable<IImageDetailResponse | null> = this.imageDetails$$

  searchRequest!: string
  imagePage = 1
  imageTag!: string

  constructor(private http: HttpClient) {
    this.getImages().subscribe()
  }

  getImages(): Observable<IImage[]> {
    const queryOptions = this.imagePage ?
      {params: new HttpParams()
          .set('page', this.imagePage)
          .set('per_page', 30)
          .set('client_id', environment.apiKey)} : {}
    return this.http.get<IImage[]>('https://api.unsplash.com/photos', queryOptions)
      .pipe(
        tap(images => this.images$$.next(images)),
      )
  }

  searchImages(): Observable<IImage[]> {
    const queryOptions = this.searchRequest ?
      {params: new HttpParams()
          .set('page', this.imagePage)
          .set('per_page', 30)
          .set('query', this.searchRequest)
          .set('client_id', environment.apiKey)} : {}
    return this.http.get<IImageListResponse>('https://api.unsplash.com/search/photos', queryOptions)
      .pipe(
        map((results: IImageListResponse) => results.results),
        tap(images => this.images$$.next(images)),
      )
  }

  searchImagesByTag(): Observable<IImage[]> {
    this.searchRequest = ''
    const queryOptions = this.imageTag ?
      {params: new HttpParams()
          .set('page', this.imagePage)
          .set('per_page', 30)
          .set('query', this.imageTag)
          .set('client_id', environment.apiKey)} : {}
    return this.http.get<IImageListResponse>('https://api.unsplash.com/search/collections', queryOptions)
      .pipe(
        map((response: IImageListResponse) => response.results),
        tap(images => this.images$$.next(images.map(images => images.cover_photo)))
      )

  }

  getDetailedImage(imageId: string): Observable<IImageDetailResponse | null> {
    const queryParams = imageId ? {
      params: new HttpParams()
        .set('client_id', environment.apiKey)
    } : {}
    return this.http.get<IImageDetailResponse>(`https://api.unsplash.com/photos/${imageId}`, queryParams)
      .pipe(
        startWith(null),
        tap(image => this.imageDetails$$.next(image))
      )
  }
}
