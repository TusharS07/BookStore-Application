import { Injectable } from '@angular/core';
import { HttpServiceService } from '../HttpService/http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  token:any = localStorage.getItem('token');

  constructor(private HttpService: HttpServiceService) { }

  
  login(reqdata: any) {

    // this.token = localStorage.getItem('token');

    // let httpHeadersOption = {
    //   headers: new HttpHeaders({
    //     contentType: 'application/json',
    //     authorization: this.token
    //   })
    // }
    return this.HttpService.PostService("login", reqdata, false, {});
  }

  registerNewUser(reqData: any) {
    
    return this.HttpService.PostService("registration", reqData, false, {});
  }


}
