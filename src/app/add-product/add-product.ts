import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';
import{ FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  products: IProduct[] = [];
  constructor(private productService: ProductService, private router: Router) {
    this.products = [];
  }
  product: IProduct = { id: 0, name: '', price: 0, type: '' };

  save() {
    this.productService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
