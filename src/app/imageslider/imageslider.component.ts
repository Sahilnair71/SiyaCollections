import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import KeenSlider from "keen-slider"

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css',]
})
export class ImagesliderComponent {
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>
  interval: any = 0
  pause: boolean = false
  slider: KeenSlider = null

  constructor() { }

  resetInterval() {
    clearInterval(this.interval)
  }
  setInterval() {
    this.resetInterval()
    this.interval = setInterval(() => {
      if (!this.pause) {
        this.slider.next()
      }
    }, 2000)
  }
  setPause(active) {
    this.pause = active
    this.setInterval()
  }
  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      duration: 1000,
      dragStart: () => {
        this.setPause(true)
      },
      dragEnd: () => {
        this.setPause(false)
      },
    })
    this.setInterval()
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }


}
