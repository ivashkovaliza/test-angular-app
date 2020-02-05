import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ISources } from "./sources";
import { IArticles } from "./articles";
import { Observable } from "rxjs/internal/Observable";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";


@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  apiKey = '83c8aebd6ec444179f992b3fc49b9b3f';
  arr = [];
  myArticles = new BehaviorSubject<any>([]);
  currentMyArticles = this.myArticles.asObservable();

  sourceArticles = new BehaviorSubject<any>([]);
  currentSourceArticles = this.sourceArticles.asObservable();


  constructor(private http: HttpClient) { }

  getSources(): Observable<ISources> {
    return this.http.get<ISources>(`https://newsapi.org/v2/sources?apiKey=${this.apiKey}`);
  }

  setSourceArticles(sourceId) {
    return this.http.get<IArticles>(`https://newsapi.org/v2/everything?sources=${sourceId}&pageSize=10&apiKey=${this.apiKey}`)
      .subscribe((data: any) => {
        data.articles = data.articles.map(item => {
          item.id = Math.random().toString(36).substr(2, 9);
          return item;
        });

        this.sourceArticles.next(data.articles.concat(this.arr))
      });
  }

  setMyArticles(article) {
    article.id = Math.random().toString(36).substr(2, 9);
    article.publishedAt = new Date();
    this.arr.push(article);
    this.myArticles.next(this.arr)
  }
}
