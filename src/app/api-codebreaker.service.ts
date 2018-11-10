import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiCodebreakerService {

  constructor(private http: HttpClient) { }

  getGuess(titleItem: string): Observable<any>{

    const guessURL = `https://codebreakerspring.herokuapp.com/codebreaker/guess/${titleItem}`;
    return this.http.get(guessURL);
  }

}
