import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  myProduct; //to be passed to the URL as the productId
  constructor(
    private route: ActivatedRoute,
    private cartService : CartService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe( (params) => {
      this.myProduct = products[params.get('productId')]; 
    });
  }

  addToCart(product){       //this method is local
    this.cartService.addToCart(product); //this method is from cart.service
    window.alert("Added to cart!");
  }

}