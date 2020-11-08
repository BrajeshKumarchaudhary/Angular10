import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    let d=new Date();
    let y=d.getFullYear();
    console.log(y);
    let b=new Date(value).getFullYear();
    console.log(b);
    return y-b;
  }
}
