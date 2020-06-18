import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  private secondsInit = 11;
  remainingTime: number;
  @Input()
  get seconds(): number {
    return this.secondsInit;
  }
  set seconds(value){
    const vFixed = Number(value);
    this.secondsInit = Number.isNaN(vFixed) ? 11 : vFixed;
  }

  clearTime() {
    clearInterval(this.intervalId);
  }

  constructor() {
  }

  ngOnInit(): void {
    this.reset();
    this.start();
  }

  ngOnDestroy(): void {
    this.clearTime();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTime();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start  the Countdown`;
  }

  private countDown() {
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTime();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 100);
  }
}
