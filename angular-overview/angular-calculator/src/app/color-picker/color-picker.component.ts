import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  background = '#00e067';
  onChange(value) {
    this.background = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
