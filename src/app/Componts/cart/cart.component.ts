import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cartService/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  step = 1;
  hidePlaceOrderButton = false;
  cartBooks = [];

  constructor( private cartService: CartServiceService ){}

  ngOnInit(): void {
    this.getCartBooks();
    
  }


  getCartBooks(){
    this.cartService.getCartBooks().subscribe((res) => {
      console.log(res);
      
    })
  }

  PlaceOrderButton(){
    this.step = 0
    this.hidePlaceOrderButton = !this.hidePlaceOrderButton
  }
}
