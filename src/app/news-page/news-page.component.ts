import { Component, OnInit } from '@angular/core';

import { PageService } from "../services/page/page.service";
import { RequestsService } from "../services/requests/requests.service";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  filter = '';
  isCreatedByMe = false;
  showNewsArr = [];
  newsCount = 3;
  currentNewsCount = 3;
  sources = [];
  arr=[];
  myArticles = [];


  constructor(private pageService: PageService, private requestsService: RequestsService) {
    this.setFilterValue = this.setFilterValue.bind(this);
    this.setIsCreatedByMe = this.setIsCreatedByMe.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  newPageTitle(title) {
    this.pageService.changeTitle(title);
  }

  ngOnInit() {
    this.newPageTitle('News');
    this.requestsService.currentSourceArticles.subscribe(arr => {
      this.arr = arr;
      this.showNewsArr = this.arr.slice(0, this.currentNewsCount);
    });

    this.requestsService.currentMyArticles.subscribe( myArticles => {
      this.myArticles = myArticles;
      this.arr = this.arr.concat(this.myArticles);
    })
  }

  onLoadMore() {
      this.currentNewsCount += this.newsCount;
      this.showNewsArr = this.arr.slice(0, this.currentNewsCount);
  }

  setFilterValue(value) {
    this.filter = value;
  }

  setIsCreatedByMe(value) {
    this.isCreatedByMe = value;
  }
}
