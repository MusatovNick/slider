import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SliderItemInterface } from '../../../Interfaces/slider-item.interface';

const PLUS = 'plus';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() sliderItemList: SliderItemInterface[] = [];

  activeSlideId$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  private isFirstClick = false;
  private sliderIds: number[] = [];
  private activeNumberSlideItem = 0;

  private readonly onDestroy$ = new Subject<void>();
  private readonly clearInterval$ = new Subject<void>();

  ngOnInit(): void {
    this.sliderItemList.forEach(item => this.sliderIds.push(item.id));
    this.activeSlideId$.next(this.sliderIds[0]);
    this.changeSlideItemInterval();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onSlideClick(id: number): void {
    this.isFirstClick = true;
    this.activeSlideId$.next(id);
  }

  changeActiveSlide(symbol: string): void {
    let activeIndexOfSlideIds = this.sliderIds.indexOf(this.activeSlideId$.value);
    if (symbol === PLUS) {
      const elemOfSlideIds = (activeIndexOfSlideIds < this.sliderIds.length - 1) ? ++activeIndexOfSlideIds : 0;
      const id = this.sliderIds[elemOfSlideIds];

      this.onSlideClick(id);
    } else {
      const elemOfSlideIds = activeIndexOfSlideIds > 0 ? --activeIndexOfSlideIds : this.sliderIds.length - 1;
      const id = this.sliderIds[elemOfSlideIds];

      this.onSlideClick(id);
    }
  }

  private changeSlideItem(): void {
    if ((this.sliderIds.length - 1) > this.activeNumberSlideItem) {
      ++this.activeNumberSlideItem;
      this.setActiveSlide();
    } else {
      this.activeNumberSlideItem = 0;
      this.setActiveSlide();
    }
  }

  private setActiveSlide(): void {
    this.activeSlideId$.next(this.sliderIds[this.activeNumberSlideItem]);
  }

  private changeSlideItemInterval(): void {
      const slideInterval = setInterval(() => {
        if (!this.isFirstClick) {
          this.changeSlideItem();
        } else {
          this.clearInterval$.next();
        }
      }, 2000);

      this.clearInterval$
        .pipe(
          takeUntil(this.onDestroy$)
        ).subscribe(() => clearInterval(slideInterval));
    }
}
