import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

    public classes = {
        underlined: this.fiftyFifty(),
        bolded: this.fiftyFifty()
    };
    public styles = {
        color: this.fiftyFifty() ? "red" : " green",
        fontWeight: this.fiftyFifty() ? "bold" : null
    }
    private fiftyFifty(): boolean {
        return Math.random() < 0.5;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
