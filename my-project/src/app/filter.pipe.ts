import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, sName:String):any {
    if(sName==""){
      return value;
    }
    const data:any[]=[];
    for(let i=0;i<value.length;i++){
      if(value[i].name.startsWith(sName)){
         data.push(value[i]);
       }
    }
        return data;
  }
}
