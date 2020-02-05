import { Pipe, PipeTransform } from '@angular/core';
import {PageService} from "../../services/page/page.service";

@Pipe({
  name: 'filterByMine'
})
export class FilterByMinePipe implements PipeTransform {
  username = '';
  constructor(private pageService: PageService){}

  transform(value: any, arg: any): any {
    this.pageService.currentUser.subscribe(username => this.username = username);


    return arg ? value.filter(item => item.author == this.username): value;
  }

}
