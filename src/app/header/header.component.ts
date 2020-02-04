import { Component, OnInit } from '@angular/core';
import { PageService } from "../services/page/page.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // title = this.pageService.getPageTitle();
  title = '';

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService.currentTitle.subscribe(title => this.title = title);
  }

  ngOnChanges() {

  }

}
