import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more-btn',
  templateUrl: './load-more-btn.component.html',
  styleUrls: ['./load-more-btn.component.scss']
})
export class LoadMoreBtnComponent implements OnInit {
  @Output() loadMore = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
