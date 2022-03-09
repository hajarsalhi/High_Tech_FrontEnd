import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getArticle(): Observable<Article[]>{
    return this.http.get("rest/articles")
                .pipe(map((res : any) =>{
                  return res ;
                }))
  } 
}
