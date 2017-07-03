import { Pipe } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe {
  transform(array: Array<string>, args: {order: string, on: string} ): Array<string> {
    if (args === null) {
      return array;
    }

    if (args.order === 'ASC') {
      console.log('test 1');
      array.sort((a: any, b: any) => {
        if (parseInt(a[args.on]) < parseInt(b[args.on])) {
          return -1;
        } else if (parseInt(a[args.on]) > parseInt(b[args.on])) {
          return 1;
        } else {
          return 0;
        }
      });
    }else {
      console.log('test 2');
      array.sort((a: any, b: any) => {
        if (parseInt(a[args.on]) < parseInt(b[args.on])) {
          return 1;
        } else if (parseInt(a[args.on]) > parseInt(b[args.on])) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    console.log(array);
    return array;
  }
}
