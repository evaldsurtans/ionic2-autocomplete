import {PipeTransform, Pipe} from '@angular/core';

/**
 * bolds the beggining of the matching string in the item
 */
@Pipe({
  name: 'boldbegin'
})
export class BoldBegin implements PipeTransform {
  transform(value: string, keyword: string): any {
    return value.replace(new RegExp(keyword, 'gi'), function(str) { return str.bold(); });
  }
}

