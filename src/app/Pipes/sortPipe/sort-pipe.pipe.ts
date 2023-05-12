import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: any[], args: any) {
    console.log(value, args);
    if (!args) {
      return value;
    }
    else if(args === 'lowToHigh'){
      return value.sort((a, b) => {
        return a.discountPrice - b.discountPrice;
      })
    } else if(args === 'HighToLow'){
      return value.sort((a, b) => {
        return b.discountPrice - a.discountPrice;
      })
    }
    else{
        return value;
    }
  }
}
