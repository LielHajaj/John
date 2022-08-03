import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;
    public imageSource: string;
    constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) { }

    async ngOnInit() {


        try {
            const id = +this.activatedRoute.snapshot.params["productId"];
            this.product = await this.productsService.getOneProduct(id);
            this.imageSource = environment.productsUrl + "images/" + this.product.imageName;

        }
        catch (err: any) {
            alert(err.message);
        }


    }
    async deleteProduct() {
        try {
            await this.productsService.deleteProduct(this.product.id);
            alert("product has been deleted 👌");
            this.router.navigateByUrl("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }



}
