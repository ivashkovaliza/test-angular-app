import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import { sources } from '../sources';
import { RequestsService } from "../services/requests/requests.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  sources = [];
  groupedSources = {};
  alphabetArr = [];
  articles = [];
  arr = [];

  constructor(private requestsService: RequestsService) { }

  @Input() ngIf: any;

  createAlphabetNav() {
    this.sources.forEach((item) => {
      let sourceFirstLetter = item.name.slice(0,1);

      if(!this.alphabetArr.includes(sourceFirstLetter)) {
        this.alphabetArr.push(sourceFirstLetter);
        this.groupedSources[sourceFirstLetter] = [];
        this.groupedSources[sourceFirstLetter].push(item);
      } else {
        this.groupedSources[sourceFirstLetter].push(item);
      }
    });
  }

  manageMobileNavigation() {
    const nav = document.getElementById("topNav");
    if (nav.className === "nav-wrapper") {
      nav.className += " responsive";
    } else {
      nav.className = "nav-wrapper";
    }
  }

  setSourceArticles(sourceId) {
    this.requestsService.setSourceArticles(sourceId);
  }

  ngOnInit() {
    this.requestsService.getSources()
      .subscribe(data => {
        this.sources = data.sources;
        this.createAlphabetNav();
      });
  }

}
