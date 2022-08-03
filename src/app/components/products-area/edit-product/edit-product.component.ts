import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

    public product: ProductModel;
    public productForm: FormGroup;
    public nameControl: FormControl;
    public priceControl: FormControl;
    public stockControl: FormControl;
    public imageControl: FormControl;

    @ViewChild("imageControl")
    public imageWrapper: ElementRef<HTMLInputElement>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductsService,
        private route: Router ) { }

    async ngOnInit() {
        try {
            const id = +this.activatedRoute.snapshot.params["productId"];
            this.product = await this.productService.getOneProduct(id);
            this.nameControl = new FormControl(this.product.name);
            this.priceControl = new FormControl(this.product.price);
            this.stockControl = new FormControl(this.product.stock);
            this.imageControl = new FormControl();
            this.productForm =  new FormGroup({
                nameControl: this.nameControl,
                priceControl: this.priceControl,
                stockControl: this.stockControl,
                imageControl: this.imageControl
            })


        } 
        catch (err: any) {
            alert(err.message);
        }

    }
    public async send() {
        try {
            this.product.name = this.nameControl.value;
            this.product.price = this.priceControl.value;
            this.product.stock = this.stockControl.value;
            this.product.image = this.imageWrapper.nativeElement.files[0];
            await this.productService.updateProduct(this.product);
            alert("Product has been change👌");
            this.route.navigateByUrl('/products/details/'+ this.product.id);

        } catch (err: any) {
            alert(err.message);
        }
    }
}
