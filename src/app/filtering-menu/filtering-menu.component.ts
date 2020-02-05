import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageService } from "../services/page/page.service";

@Component({
  selector: 'app-filtering-menu',
  templateUrl: './filtering-menu.component.html',
  styleUrls: ['./filtering-menu.component.scss']
})
export class FilteringMenuComponent implements OnInit {
  username = '';
  constructor(private pageService: PageService) { }

  @Input() setFilterValue: any;
  @Input() setIsCreatedByMe: any;

  onSubmitFilter(value: string) {
    this.setFilterValue(value);
  }

  onCheckboxClick(value: string) {
    this.setIsCreatedByMe(value);
  }

  ngOnInit() {
    this.pageService.currentUser.subscribe(username => this.username = username);
  }

}
