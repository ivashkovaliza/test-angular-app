import { Component, OnInit, Input } from '@angular/core';
import { RequestsService } from "../services/requests/requests.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  //arr = [];
  // newsCount = 3;
  // currentNewsCount = 3;


  constructor(private requestsService: RequestsService) { }

  @Input() arr: any;
  @Input() filterValue: any;
  @Input() onLoadMore: any;
  @Input() newsCount: any;
  @Input() articles: any;
  @Input() sourceArticles: any;

  ngOnInit() {
    console.log('news list ngOnInit')
    //this.requestsService.currentSourceArticles.subscribe(arr => this.arr = arr);


    //this.showNewsArr = this.articles.slice(0, this.newsCount);


  }


  //
  // onLoadMore() {
  //   this.currentNewsCount += this.newsCount;
  //   this.showNewsArr = articles.slice(0, this.currentNewsCount);
  // }
}
