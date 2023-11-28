import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductModel } from '../entities/models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './products-list.component.html',
  styles: ``
})
export class ProductsListComponent {

  constructor(private productService: ProductService) { }

  public products: ProductModel[] = [] as ProductModel[];

  ngOnInit() {
    this.productService.getAll()
      .subscribe({
        next: products => {
          this.products = products;
          console.log(products);
        },
        error: error => console.log(error)
      });
  }
}
