import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], args: any) {
    console.log(value, args);
    if (!args) {
      return value;
    }
    return value.filter((data: any) => {
      return data.bookName.toLowerCase().includes(args) || data.author.toLowerCase().includes(args)
    })
  }

}
