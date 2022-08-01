import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { ColorService } from 'src/app/services/colors/colors.service';



@NgModule({
  declarations: [
    AboutComponent,
    AddressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent 
  ],
  providers:[
    ColorService
  ]

})
export class AboutModule { }
