import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  getProductData(){
    var data:any=[
      {
        "id":1,
        "name":"LED",
        "color":"Red"
      },
      {
        "id":1,
        "name":"BED",
        "color":"Red"
      },
      {
        "id":1,
        "name":"GED",
        "color":"Red"
      }
      
      
       ];
       return data;
  }
}
