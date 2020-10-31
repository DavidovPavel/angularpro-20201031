import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: true
})
export class ReversePipe implements PipeTransform {

  //timeAgo
  transform(value: string, ...args: unknown[]): unknown {
    console.log('transform');
    return value.split('').reverse().join('');
  }

}
