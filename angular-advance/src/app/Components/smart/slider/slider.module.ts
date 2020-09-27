import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { SliderDumbComponent } from '../../dumb/slider-dumb/slider-dumb.component';



@NgModule({
  declarations: [SliderComponent, SliderDumbComponent],
  exports: [
    SliderComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SliderModule { }
