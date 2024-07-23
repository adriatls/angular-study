import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty',
})
export class DashIfEmptyPipe implements PipeTransform {
  transform(value: any): string {
    return value == null ? '-' : value;
  }
}
