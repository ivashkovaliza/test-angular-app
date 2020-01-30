import { Component, OnInit } from '@angular/core';
import { articles } from '../articles';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  articles = articles;
  constructor() { }

  ngOnInit() {
  }

}
