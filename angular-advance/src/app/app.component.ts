import { Component, OnInit } from '@angular/core';
import { SliderItemInterface } from './Interfaces/slider-item.interface';
import { ActiveSlideService } from './Services/active-slide.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sliderItemList$: Observable<SliderItemInterface[]>;

  constructor(private activeService: ActiveSlideService) {}

  ngOnInit(): void {
    this.sliderItemList$ = this.activeService.getSliderList$();
  }
}

