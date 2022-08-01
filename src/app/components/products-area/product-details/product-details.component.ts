import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {

        const id =  +this.activatedRoute.snapshot.params["productId"];
        console.log(id);
        console.log(typeof id);
    }

}
