import { Component, AfterViewInit } from '@angular/core';
declare var anime: any;
@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
})
export class ResearchComponent implements AfterViewInit {
  //constructor() {}
  //ngOnInit(): void {}
  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('#check');
    console.log(textWrapper);
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '#check .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      })
      .add({
        targets: '.an-2',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }
}
