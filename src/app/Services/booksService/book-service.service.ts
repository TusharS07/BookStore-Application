import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token:any = localStorage.getItem('token');

  constructor(private HttpService: HttpServiceService) { }

  getAllBooks(){
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.HttpService.GetService("get/book", true, httpHeadersOption);

  }
}
