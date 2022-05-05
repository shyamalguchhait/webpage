import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
//import * as fs from 'fs';

interface album {
  src: string;
  caption: string;
  thumb: string;
}
@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
})
export class LightboxComponent implements OnInit {
  _albums: album[] = [];
  ngOnInit(): void {
    const dir = '../../../assets/lightbox';
    //const files = fs.readdirSync(dir);
    //console.log(files[0]);
  }

  constructor(private _lightbox: Lightbox) {
    //const albums: album[] = [];
    for (let i = 0; i <= 19; i++) {
      const src = '../../../assets/lightbox/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/lightbox/iiser_' + i + '-thumb.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };

      this._albums.push(album);
    }
  }
  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }
  close(): void {
    this._lightbox.close();
  }
}
