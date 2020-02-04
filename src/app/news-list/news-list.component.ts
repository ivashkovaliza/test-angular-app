import { Component, OnInit } from '@angular/core';
import { articles } from '../articles';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles = articles;
  showNewsArr = [];
  newsCount = 3;
  currentNewsCount = 3;

  constructor() { }

  ngOnInit() {
    this.showNewsArr = articles.slice(0, this.newsCount);
  }

  onLoadMore() {
    this.currentNewsCount += this.newsCount;
    this.showNewsArr = articles.slice(0, this.currentNewsCount);
  }
}
