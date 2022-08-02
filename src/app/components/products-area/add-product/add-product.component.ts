import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    public product = new ProductModel();

    constructor(private productsService: ProductsService, private route: Router) { }


    ngOnInit(): void {

    }
    @ViewChild("imageControl")
    public imageWrapper: ElementRef<HTMLInputElement>;

    public async send() {
        try {
            this.product.image = this.imageWrapper.nativeElement.files[0];
            await this.productsService.addProduct(this.product);
            alert("Product has been added 👌");
            this.route.navigateByUrl('/products');

        } catch (err: any) {
            alert(err.message);
        }
    }

}
