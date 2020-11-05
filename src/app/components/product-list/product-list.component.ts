import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product> = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getAll()
      .then(response => {
        this.productList = response;
      })
      .catch(error => {
        alert(error);
      });

  }

}
