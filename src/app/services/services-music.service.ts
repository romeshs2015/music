import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesMusicService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getAlbums() {
    const url = `http://localhost:3000/albums`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getArtists() {
    const url = `http://localhost:3000/artists`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getSongs() {
    const url = `http://localhost:3000/songs`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
