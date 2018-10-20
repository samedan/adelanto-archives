import { Injectable } from '@angular/core';

// import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {IPosts} from '../posts';


import { HttpClientModule } from '@angular/common/http';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  drhs = [
    { name: '18', dateRouted: '1809'  },
    { name: '17', dateRouted: '1808'  },
    { name: '16', dateRouted: '1807'  }
  ];

  industries = [
    { controller: 'Industrie',
     template: '',
    url: '02',
    image: 'https://www.adelanto.fr/web/industrie_info/1802_01/esker/images/email/1802_industrie_info_esker_email_03.gif',
    name: 'Industrie info',
    dateAdded: '18.09',
    members: ['Esker', 'Sage'],
    edition: 'https://www.industrie-info.com/' }
  ];


  endpoint = 'https://jsonplaceholder.typicode.com/posts';
  // jsonFile = 'https://www.adelanto.fr/archives2/assets/archives2.json';
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  private _postsURL = 'https://jsonplaceholder.typicode.com/posts';

  jsonFile = './../../assets/archives2.json';

  constructor(private http: HttpClient) { }


  private extractData(res: Response) {
    const body = res;
    return body || { };
  }


  getProducts(): Observable<any> {
    return this.http.get(this.endpoint).pipe(
      map(this.extractData));
  }

  getProduct(id): Observable<any> {
    return this.http.get(this.endpoint + '/' + id).pipe(
      map(this.extractData));
  }

  // Industrie, json local
  getEditions(): Observable<any> {
    return this.http.get(this.jsonFile).pipe(
      map(this.extractData));
  }

  // Industrie, json local
  getEdition(id): Observable<any> {
    return this.http.get(this.jsonFile + '/' + id).pipe(
      map(this.extractData));
  }

}

