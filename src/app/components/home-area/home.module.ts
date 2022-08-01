import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './clock/clock.component';
import { SloganComponent } from './slogan/slogan.component';
import { TipComponent } from './tip/tip.component';
import { SurveyComponent } from './survey/survey.component';
import { LocationComponent } from './location/location.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { DiscountComponent } from './discount/discount.component';
import { SalesComponent } from './sales/sales.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { DirectivesModule } from 'src/app/directives/directives.module';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ClockComponent,
    SloganComponent,
    TipComponent,
    SurveyComponent,
    LocationComponent,
    GiftCardComponent,
    DiscountComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    DirectivesModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
