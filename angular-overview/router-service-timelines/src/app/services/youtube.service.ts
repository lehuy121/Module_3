import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playList = [
    {id: 'CD-E-LDc384', song: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'},
    {id: 'iT6vqeL-ysI', song: 'Deadpool 2 - Take on Me'},
    {id: 'N6O2ncUKvlg', song: 'Nelly - Just A Dream'},
    {id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}
  ];
  constructor() { }
  find(id: string) {
    return this.playList.find(item => item.id === id);
  }
}
