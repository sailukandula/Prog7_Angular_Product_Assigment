import { Component } from '@angular/core';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './delete-product.html',
  styleUrl: './delete-product.css',
})
export class DeleteProduct {
  product!: IProduct;

  products: IProduct[] = [];
    constructor(private productService:ProductService, private router: Router, private route: ActivatedRoute){
       this.products= [];
    }

ngOnInit() {
  const id = this.route.snapshot.params['id'];
  this.productService.getProductById(id).subscribe(data => this.product = data);
}

delete() {
  this.productService.deleteProduct(this.product.id).subscribe(() => {
    this.router.navigate(['/']);
  });
}

}
