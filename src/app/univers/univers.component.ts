import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-univers',
  templateUrl: './univers.component.html',
  styleUrls: ['./univers.component.css']
})
export class UniversComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.generateStars(200);
  }

  generateStars(count: number): void {
    const container = this.renderer.createElement('div');
    this.renderer.addClass(container, 'stars-container');
    
    for (let i = 0; i < count; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'star');
      this.renderer.setStyle(star, 'top', `${Math.random() * 100}%`);
      this.renderer.setStyle(star, 'left', `${Math.random() * 100}%`);
      this.renderer.setStyle(star, 'width', `${Math.random() * 2}px`);
      this.renderer.setStyle(star, 'height', `${Math.random() * 2}px`);
      this.renderer.setStyle(star, 'animation-duration', `${(Math.random() * 2 + 1)}s`);
      this.renderer.appendChild(container, star);
    }
    
    this.renderer.appendChild(this.el.nativeElement, container);
  }
}
