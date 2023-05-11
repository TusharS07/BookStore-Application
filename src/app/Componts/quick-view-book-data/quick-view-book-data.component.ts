import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../Services/DataService/data-service.service';

@Component({
  selector: 'app-quick-view-book-data',
  templateUrl: './quick-view-book-data.component.html',
  styleUrls: ['./quick-view-book-data.component.scss']
})
export class QuickViewBookDataComponent implements OnInit {
  
  hideCartButton:boolean= false;
  qty:number = 1;

  bookData:any;

  constructor( private dataService: DataServiceService){}

  ngOnInit(): void {
    this.getBookData();
  }

  getBookData(){
    this.dataService.receiveSearchValue.subscribe((res) =>{
      this.bookData = res;
      console.log(this.bookData);
      
    })
  }

  addToCart(){
    this.hideCartButton = true;
  }

  increaseQTY(){
    this.qty = this.qty + 1;
  }

  decreaseQTY(){
    this.qty = this.qty - 1;
  }


}
