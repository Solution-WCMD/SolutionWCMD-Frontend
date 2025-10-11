import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-info-footer',
  imports: [RouterLink],
  templateUrl: './info-footer.component.html',
  styleUrl: './info-footer.component.css',
  standalone: true
})
export class InfoFooterComponent {

  scrollToTop(): void {
    const start = window.scrollY;
    const duration = 500;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }
}
