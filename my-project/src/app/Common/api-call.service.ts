import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }
  
  getData(url){
    return this.http.get(url);
  }
  getProductData(url){
    return this.http.get(url)
  }

}
