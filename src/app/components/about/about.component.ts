import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as anime from 'animejs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    $(document).ready(function () {
      $('#btnInfoName').click(function () {
        $('#name').toggle();
        $('#btnInfoName').val(
          $('#btnInfoName').val() == 'show me' ? 'hide me' : 'show me'
        );
      });
    });
  }
  public pfImage = '../../../assets/images/pf50.png';
  public defaultImage = '../../../assets/icons/Winter.gif';
  public backgroundImage = '../../../assets/images/aboutBg.jpg';
}
