import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormation'
})
export class PriceFormationPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '');
  }

}
