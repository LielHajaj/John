import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-slogan',
    templateUrl: './slogan.component.html',
    styleUrls: ['./slogan.component.css']
})
export class SloganComponent implements OnInit {

    @Input()
    public slogan: string;
    constructor() { }

    ngOnInit(): void {
    }

}
