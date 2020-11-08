import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import {LoggerService} from '../../Common/logger.service';
import {ApiCallService}    from '../../Common/api-call.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   data:Object=[];
   name="brajesh";
  constructor(private logger:LoggerService,private apiService:ApiCallService) { }

  ngOnInit(){
    this.logIt(`OnInit`);
    this.getDateFromService();
  }
  logIt(msg: string) {
    this.logger.log(msg);
  }
  getDateFromService(){
      this.apiService.getData("https://jsonplaceholder.typicode.com/todos").subscribe(data1=>{
      console.warn(data1);
      this.data=data1;
    })
  }

}
