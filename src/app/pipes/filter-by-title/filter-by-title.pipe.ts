import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '') return value;

    return  value.filter((item) => {
      return item.title.toLowerCase().includes(arg.toLowerCase())
    });
  }

}
