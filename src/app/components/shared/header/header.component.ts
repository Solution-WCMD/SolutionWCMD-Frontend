import {Component, HostListener} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isCollapsed = false;

  private lastState = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.lastState && window.scrollY > 200) {
      this.isCollapsed = true;
      this.lastState = true;
    } else if (this.lastState && window.scrollY === 0) {
      this.isCollapsed = false;
      this.lastState = false;
    }
  }
}
