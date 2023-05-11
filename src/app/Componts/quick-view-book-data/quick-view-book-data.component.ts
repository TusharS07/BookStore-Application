import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-view-book-data',
  templateUrl: './quick-view-book-data.component.html',
  styleUrls: ['./quick-view-book-data.component.scss']
})
export class QuickViewBookDataComponent {

  hideCartButton:boolean= false;
  qty:number = 1;

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
