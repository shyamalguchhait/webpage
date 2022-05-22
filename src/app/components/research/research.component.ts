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

      const textWrapper1 = $(
        '#1st, #2nd, #3rd, #4th, #5th, #6th, #check, #8th, #9th, #10th'
      );
      var text = new Array();

      textWrapper1.each(function (index) {
        const text1: string = $(this).text();
        console.log(text1);
        text.push(text1);
        const textS1 = text[index].replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
        $(this).html(textS1);
      });
      anime
        .timeline({ loop: true })
        .add({
          targets: '.letter',
          opacity: [0, 1],
          scale: [4, 1],
          easing: 'easeInOutQuad',
          duration: 100, //2250,
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
