import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-univers',
  templateUrl: './univers.component.html',
  styleUrls: ['./univers.component.css']
})
export class UniversComponent implements OnInit {
  private readonly starBackgroundColors = ['white', '#0B0C3E', '#4B0082', '#3D2C49', '#1B4D3E', '#5C2E5D', '#4A4E69', '#2C3E50', '#9B59B6', '#BDC3C7', '#2980B9', '#D2A6C4', '#6A5ACD'];

  public constructor(private renderer: Renderer2, private el: ElementRef) {}

  public ngOnInit(): void {
    this.generateStars(200);
    this.generateGalaxies(10);
  }

  private generateStars(count: number): void {
    const container = this.renderer.createElement('div');
    this.renderer.addClass(container, 'stars-container');
    
    for (let i = 0; i < count; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'star');
      this.renderer.setStyle(star, 'top', `${Math.random() * 100}%`);
      this.renderer.setStyle(star, 'left', `${Math.random() * 100}%`);
      this.renderer.setStyle(star, 'width', `${Math.random() * 2}px`);
      this.renderer.setStyle(star, 'height', `${Math.random() * 2}px`);
      this.renderer.appendChild(container, star);
    }
    
    this.renderer.appendChild(this.el.nativeElement, container);
  }

  private generateGalaxies(count: number): void {
    const container = this.renderer.createElement('div');
    this.renderer.addClass(container, 'stars-container');
    
    for (let i = 0; i < count; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const bottom = Math.random() * 100;
      const right = Math.random() * 100;
      for (let j = 0; j < 40; j++) {
        const star = this.renderer.createElement('div');
        this.renderer.addClass(star, 'star');
        this.renderer.setStyle(star, 'top', `${top + Math.random()*2}%`);
        this.renderer.setStyle(star, 'bottom', `${bottom + Math.random()*2}%`);
        this.renderer.setStyle(star, 'right', `${right + Math.random()*2}%`);
        this.renderer.setStyle(star, 'left', `${left + Math.random()*2}%`);
        this.renderer.setStyle(star, 'width', `${Math.random() * 2}px`);
        this.renderer.setStyle(star, 'height', `${Math.random() * 2}px`);
        this.renderer.setStyle(star, 'background-color', this.starBackgroundColors[Math.floor(Math.random() * this.starBackgroundColors.length)]);
        this.renderer.appendChild(container, star);
      }
    }
    
    this.renderer.appendChild(this.el.nativeElement, container);
  }
}
