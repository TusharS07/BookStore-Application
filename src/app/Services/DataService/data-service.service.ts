import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject([]);
  receiveSearchValue = this.messageSource.asObservable();
  
  private messageSourceSort = new BehaviorSubject([]);
  receiveSearchValueSort = this.messageSourceSort.asObservable();

  constructor() { }

  sendSearchValue(data: any) {
    console.log(data);

    this.messageSource.next(data)
  }
  sendSearchValueSort(data: any) {
    console.log(data);

    this.messageSourceSort.next(data)
  }
}
