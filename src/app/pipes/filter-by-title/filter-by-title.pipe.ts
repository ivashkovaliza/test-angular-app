import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log('filtering', value, arg);
    if(arg === '') return value;

    const a = value.filter((item) => {
      return item.title.toLowerCase().includes(arg.toLowerCase())
    });
    console.log(a)
    return a;
  }

}
