import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 120){
      return value.substr(0, 200) + '...';
    }
    return value;
  }

}
