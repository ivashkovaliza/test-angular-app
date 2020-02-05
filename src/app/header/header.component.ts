import { Component, OnInit } from '@angular/core';
import { PageService } from "../services/page/page.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = '';
  username = '';

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService.currentTitle.subscribe(title => this.title = title);
    this.pageService.currentUser.subscribe(username => this.username = username);
  }

  ngOnChanges() {

  }

}
