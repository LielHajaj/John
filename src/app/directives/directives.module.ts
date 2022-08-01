import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight/highlight.directive';
import { ZoomInDirective } from './zoom-in/zoom-in.directive';
import { SeasonDirective } from './season/season.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ZoomInDirective,
    SeasonDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HighlightDirective,
    ZoomInDirective,
    SeasonDirective
  ]
})
export class DirectivesModule { }
