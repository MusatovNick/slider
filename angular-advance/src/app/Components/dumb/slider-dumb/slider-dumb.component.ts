import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SliderItemInterface } from '../../../Interfaces/slider-item.interface';

@Component({
  selector: 'app-slider-dumb',
  templateUrl: './slider-dumb.component.html',
  styleUrls: ['./slider-dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDumbComponent {
  @Input() sliderItemList: SliderItemInterface[];
  @Input() activeSlideId: number;
  @Output() activatedSlide = new EventEmitter<number>();
  @Output() changeActiveSlide = new EventEmitter<string>();

  onItemClick(id: number): void {
    this.activatedSlide.emit(id);
  }

  slideItemChange(symbol: string): void {
    this.changeActiveSlide.emit(symbol);
  }
}
