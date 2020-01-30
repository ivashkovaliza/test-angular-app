import { Component, OnInit, Input } from '@angular/core';
import { sources } from '../sources';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  sources = sources;
  groupedSources = {};
  alphabetArr = [];

  constructor() { }

  @Input() ngIf: any;

  createAlphabetNav() {

    sources.forEach((item) => {
      let sourceFirstLetter = item.name.slice(0,1);

      if(!this.alphabetArr.includes(sourceFirstLetter)) {
        this.alphabetArr.push(sourceFirstLetter);
        this.groupedSources[sourceFirstLetter] = [];
        this.groupedSources[sourceFirstLetter].push(item);
      } else {
        this.groupedSources[sourceFirstLetter].push(item);
      }
    });

    console.log(this.groupedSources);
  }

  ngOnInit() {
    this.createAlphabetNav();
  }

}
