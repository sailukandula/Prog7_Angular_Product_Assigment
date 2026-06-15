import { Component } from '@angular/core';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: true,                     
  imports: [RouterModule, CommonModule],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
})
export class ListProducts {
  
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      console.log("API returned:", data);
      this.products = data;
    });
  }
}
