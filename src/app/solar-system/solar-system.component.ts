import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent implements OnInit {

  public ngOnInit(): void {
    this.createPlanetKeyframes('mercury', 8.8);
    this.createPlanetKeyframes('venus', 22.4);
    this.createPlanetKeyframes('earth', 36.5);
    this.createPlanetKeyframes('mars', 68.7);
    this.createPlanetKeyframes('jupiter', 433);
    this.createPlanetKeyframes('saturn', 1075);
    this.createPlanetKeyframes('uranus', 3368);
    this.createPlanetKeyframes('neptune', 6019);
  }

  private createPlanetKeyframes(planet: string, duration: number): void {
    const randomFrom = Math.random() * 360;
    const randomTo = randomFrom + 360;

    const keyframes = `
      @keyframes ${planet}-orbit {
        from {
          transform: rotate(${randomFrom}deg);
        }
        to {
          transform: rotate(${randomTo}deg);
        }
      }
    `;

    this.appendKeyframesToStyle(keyframes);

    const planetOrbit = document.querySelector(`.${planet}-orbit`) as HTMLElement;
    if (planetOrbit) {
      planetOrbit.style.animation = `${planet}-orbit ${duration}s linear infinite`;
    }
  }

  private appendKeyframesToStyle(keyframes: string): void {
    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);
  }
}
