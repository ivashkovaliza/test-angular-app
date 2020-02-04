import { Component, OnInit } from '@angular/core';

//import { articles } from '../articles';

import { PageService } from "../services/page/page.service";
import { RequestsService } from "../services/requests/requests.service";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  filter = '';
  showNewsArr = [];
  newsCount = 3;
  currentNewsCount = 3;
  //articles = articles;
  sources = [];
  sourceArticles = [];
  arr=[];

  constructor(private pageService: PageService, private requestsService: RequestsService) { }

  newPageTitle(title) {
    this.pageService.changeTitle(title);
  }

  ngOnInit() {
    this.newPageTitle('News');
    this.requestsService.currentSourceArticles.subscribe(arr => {
      this.arr = arr;


      console.log(this.arr)
    });
  }

  // onLoadMore() {
  //   this.currentNewsCount += this.newsCount;
  //   this.showNewsArr = this.articles.slice(0, this.currentNewsCount);
  // }

  setFilterValue(value) {
    this.filter = value;
    //this.currentNewsCount = this.newsCount;
    //console.log('this.filterValue  ', this.filterValue)
  }
}
