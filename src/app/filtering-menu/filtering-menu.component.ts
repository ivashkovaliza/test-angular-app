import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filtering-menu',
  templateUrl: './filtering-menu.component.html',
  styleUrls: ['./filtering-menu.component.scss']
})
export class FilteringMenuComponent implements OnInit {

  constructor() { }

  @Input() setFilterValue: any;

  onSubmitFilter(value: string) {
    this.setFilterValue(value);
    console.log(value);
  }

  ngOnInit() {
  }

}
