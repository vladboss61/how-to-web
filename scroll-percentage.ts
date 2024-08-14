import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="scroll-line" [style.width.%]="scrollPercent"></div>`,
  styles: [`
    .scroll-line {
      height: 5px;
      background-color: red;
      position: fixed;
      top: 0;
      left: 0;
      width: 0;
      z-index: 1000;
    }`
  ]
})
export class AppComponent implements OnInit {
  scrollPercent = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const docElement = document.documentElement;
    const scrollTop = docElement.scrollTop;
    const scrollHeight = docElement.scrollHeight - docElement.clientHeight;

    this.scrollPercent = (scrollTop / scrollHeight) * 100;
  }

  ngOnInit(): void {
    this.onWindowScroll(); // Initialize the scroll position
  }
}
