import { Component, OnInit } from '@angular/core';

import { PageService } from "../services/page/page.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent implements OnInit {

  constructor(private pageService: PageService, private router: Router) { }

  newPageTitle(title) {
    this.pageService.changeTitle(title);
  }

  ngOnInit() {
    this.newPageTitle('Log in');
  }

  logIn(value) {
    this.pageService.logInUser(value.username);
    this.router.navigate(["/"]);
  }

}
