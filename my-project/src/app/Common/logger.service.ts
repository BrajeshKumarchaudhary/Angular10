import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {}

  log(message:String){
    console.log("Message---"+message);
  }
}
