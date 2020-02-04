import { Component, OnInit } from '@angular/core';
import {RequestsService} from "../services/requests/requests.service";
import {Subscription} from "rxjs/internal/Subscription";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  arr = [];
  article;
  private id: string;
  private routeSubscription: Subscription;

  constructor(private requestsService: RequestsService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.requestsService.currentSourceArticles.subscribe(arr => {this.arr = arr});
    console.log(this.arr);
    this.article = this.arr.filter(item => {
      return item.id === this.id;
    })[0];


    console.log(this.article);
  }

}
