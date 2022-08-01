import { Component, HostBinding, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/colors/colors.service';

@Component({
    selector: 'app-random-sale',
    templateUrl: './random-sale.component.html',
    styleUrls: ['./random-sale.component.css']
})
export class RandomSaleComponent implements OnInit {

    constructor(private colorService: ColorService) { }
    public randomSale: string;
    public products = ["food", "candy", "drinks", "fish", "milk", "meat", "eggs"];
    private timerId: number;
    public styles = {
        backgroundColor: ""
    }

    ngOnInit(): void {
        this.styles.backgroundColor = this.colorService.getRandomColor();
        this.randomSale = this.products[Math.floor(Math.random() * this.products.length)];
        this.timerId = window.setInterval(() => {
            this.randomSale = this.products[Math.floor(Math.random() * this.products.length)];
            this.styles.backgroundColor = this.colorService.getRandomColor();
        }, 5000);
    }

    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }
}
