import { Component, Input } from '@angular/core';
import { productInfo } from '../../app.module'; //Importing interface to structure values

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: productInfo; //Grabbing values being passed from Parent Component
}
