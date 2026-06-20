import { Component } from '@angular/core';
import { IProduct } from '../IProduct';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import{ FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {
  
  product: IProduct = { id: 0, name: '', price: 0, type: '' };
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
    
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
      console.log("API update returned:",this.product);
       this.cdr.detectChanges();
    });
  }

  update() {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}

