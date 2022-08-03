import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { ColorService } from 'src/app/services/colors/colors.service';
import { GeneratorService } from 'src/app/services/generator/generator.service';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';



@NgModule({
  declarations: [
    AboutComponent,
    AddressComponent,
    RandomNumbersComponent 
],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent 
  ],
  providers:[
    ColorService,
    GeneratorService
  ]

})
export class AboutModule { }
