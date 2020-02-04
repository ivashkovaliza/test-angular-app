import { Component, OnInit } from '@angular/core';

import {PageService} from "../services/page/page.service";

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent implements OnInit {

  constructor(private pageService: PageService) { }

  onClickLogInBtn() {
    console.log('Log in!');
  }

  newPageTitle(title) {
    this.pageService.changeTitle(title);
  }

  ngOnInit() {
    this.newPageTitle('News');
  }

}
