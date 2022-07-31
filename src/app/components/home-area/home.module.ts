import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ClockComponent } from './clock/clock.component';
import { SloganComponent } from './slogan/slogan.component';
import { TipComponent } from './tip/tip.component';
import { SurveyComponent } from './survey/survey.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ClockComponent,
    SloganComponent,
    TipComponent,
    SurveyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
