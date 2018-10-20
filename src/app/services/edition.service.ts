import { Edition } from './../edition';
import { Injectable } from '@angular/core';
// import { EDITIONS } from '../../assets/editions';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EditionService {

  jsonFile = './../assets/archives.json';

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }

  // getEditions(): Edition[] {
  //   return EDITIONS;
  // }

  // READ TS File
  /*getEditions(): Observable<Edition[]> {
    return of(EDITIONS);
  }*/

  getEditions(): Observable<any> {
    return this.http.get(this.jsonFile).pipe(
      map(this.extractData));
  }

  // READ TS File
  // getEdition(id: number): Observable<Edition> {
  //   return of(EDITIONS.find(edition => edition.id === id));
  // }

  // Industrie, json local
  getEdition(id, type): Observable<any> {
    return this.http.get(this.jsonFile + '/' + type + '/' + id).pipe(
      map(this.extractData));
  }

}
