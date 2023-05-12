import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  token:any;

  constructor(private HttpService: HttpServiceService) { }

  getCartBooks(){
    this.token = localStorage.getItem('token');
    
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        token: this.token
      })
    }
    return this.HttpService.GetService('get_cart_items', true, httpHeadersOption);

  }
}
