import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/colors/colors.service';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

    public styles = {
        backgroundColor: ""
    }
    
    constructor(private colorsService : ColorService) {
       
     }

    ngOnInit(): void {
        this.styles.backgroundColor = this.colorsService.getRandomColor();

    }

}
