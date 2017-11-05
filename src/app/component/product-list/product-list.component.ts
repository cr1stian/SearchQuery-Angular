import { Component, Input } from '@angular/core';
import { productInfo } from '../../app.module'; //Importing interface to use in Array below

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
 @Input() products: Array<productInfo>; //Grabbing values being passed from Parent Component
}
