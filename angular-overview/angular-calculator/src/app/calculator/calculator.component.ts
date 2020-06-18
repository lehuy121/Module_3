import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  firstNum: number;
  secondNum: number;
  operator = '+';
  result: number;
  onFirstChange(value) {
    this.firstNum = Number(value);
  }

  onSecondChange(value) {
    this.secondNum = Number(value);
  }

  onSelectChange(value) {
    this.operator = value;
  }
  calculate(){
    switch (this.operator) {
      case '+':
        this.result = this.firstNum + this.secondNum;
        break;
      case '-':
        this.result = this.firstNum - this.secondNum;
        break;
      case '*':
        this.result = this.firstNum * this.secondNum;
        break;
      case '/':
        this.result = this.firstNum / this.secondNum;
        break;
    }
  }

  constructor() {
  }
  ngOnInit(): void {
  }
}
