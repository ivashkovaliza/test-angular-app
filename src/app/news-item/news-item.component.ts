import { Component, OnInit, Input  } from '@angular/core';
import {PageService} from "../services/page/page.service";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  username = '';
  constructor(private pageService: PageService){}

  @Input() articleData: any;

  ngOnInit() {
    this.pageService.currentUser.subscribe(username => this.username = username);
  }

}
