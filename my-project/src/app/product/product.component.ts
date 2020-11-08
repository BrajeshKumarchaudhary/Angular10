import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ApiCallService} from '../Common/api-call.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  message:any="Hello goodmorning"
  date:any="10-19-1997 11:13:57"
  data:any;
  user:any;
  switchData:any;
  search:String=""
  dobValue:any="10-1-1997 11:13:57";
  constructor(private service:ProductService,private httpService:ApiCallService) {
    this.data=service.getProductData();
    this.user=[];
    this.switchData=[1,25,3]
   }

  ngOnInit(){
    let resp=this.httpService.getProductData("https://jsonplaceholder.typicode.com/users");
    resp.subscribe(data=>
      {
        console.log(data);
        this.user=data;
      });
  }
}
