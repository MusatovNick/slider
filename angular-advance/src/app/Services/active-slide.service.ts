import { Injectable } from '@angular/core';
import { SliderItemInterface } from '../Interfaces/slider-item.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveSlideService {
  getSliderList$(): Observable<SliderItemInterface[]> {
    const sliderItemList: SliderItemInterface[] = [
      {url: 'assets/images/6.jpg', id: 6},
      // {url: 'assets/images/1.png', id: 1},
      {url: 'assets/images/8.jpg', id: 8},
      // {url: 'assets/images/2.png', id: 2},
      // {url: 'assets/images/3.png', id: 3},
      // {url: 'assets/images/4.png', id: 4},
      {url: 'assets/images/5.jpg', id: 5},

      {url: 'assets/images/7.jpg', id: 7},
      // {url: 'assets/images/8.jpg', id: 8},
    ];
    return of(sliderItemList);
  }
}
