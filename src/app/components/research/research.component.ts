import { Component, AfterViewInit, OnInit } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
})
export class ResearchComponent implements AfterViewInit, OnInit {
  //constructor() {}
  ngOnInit(): void {
    $(document).ready(function () {
      /*
      const textWrapper = $('#check');
      const text: string = textWrapper.text();

      const textS = text.replace(/\S/g, "<span class='letter'>$&</span>");
      textWrapper.html(textS);*/
    });
  }
  ngAfterViewInit(): void {
    $(document).ready(function () {
      //const textWrapper = document.querySelector('#check');
      //console.log(textWrapper);
      //textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g,"<span class='letter'>$&</span>");
      const textWrapper = $('#check');
      const text: string = textWrapper.text();

      const textS = text.replace(/\S/g, "<span class='letter'>$&</span>");
      textWrapper.html(textS);

      anime
        .timeline({ loop: true })
        .add({
          targets: '.letter',
          opacity: [0, 1],
          scale: [4, 1],
          easing: 'easeInOutQuad',
          duration: 2250,
          delay: (el: number, i: number) => 150 * (i + 1),
        })
        .add({
          targets: '.letter',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    });
  }
}
