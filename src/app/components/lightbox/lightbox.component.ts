import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { listFiles } from 'list-files-in-dir';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { delay } from 'rxjs';
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
  private apiURL = 'http://www.mocky.io/v2/5ea172973100002d001eeada';
  public response: any;
  ngOnInit(): void {
    const dir = '../../../assets/lightbox';
    //const files = fs.readdirSync(dir);
    //console.log(files[0]);
    $(document).ready(function () {
      $('.gallery-img').each(function (index) {
        const value = '.gallery-img' + ':nth-child(' + index + ')';
        const anim = [
          'bounce',
          'flash',
          'pulse',
          'rubberBand',
          'shakeX',
          'shakeY',
          'headShake',
          'swing',
          'tada',
          'wobble',
          'jello',
          'heartBeat',
          'flip',
          'flipInX',
          'flipInY',
          'hinge',
          'jackInTheBox',
          'rollIn',
          'zoomIn',
          'zoomInDown',
          'zoomInLeft',
          'zoomInRight',
          'zoomInUp',
        ];
        //console.log(value);
        $(value)
          .mouseenter(function () {
            $(this).css('animation', anim[index] + ' 1s');
          })
          .mouseleave(function () {
            $(this).css('animation', '');
          });
        $(this).hover(function () {
          $(this).attr('title', 'Click to view the image');
        });
      });
    });
    this.http.get(this.apiURL).subscribe((Response) => {
      console.log(Response);
    });
  }

  constructor(private _lightbox: Lightbox, private http: HttpClient) {
    //const albums: album[] = [];
    for (let i = 0; i <= 19; i++) {
      const src = '../../../assets/lightbox/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/lightbox/' + i + '.jpg';
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
  async fetchData() {
    this.response = '';
    this.response = await this.http
      .get<any>(this.apiURL)
      .pipe(delay(1000))
      .toPromise();
  }
}
