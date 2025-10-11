import { Component } from '@angular/core';
import {ApplicationFormComponent} from '../application-form.component/application-form.component';
import {CommonModule} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-career-content',
  imports: [CommonModule, ApplicationFormComponent, RouterOutlet],
  templateUrl: './career-content.component.html',
  styleUrl: './career-content.component.css',
  standalone: true
})
export class CareerContentComponent {
  constructor(private router: Router) {}

  openFundingDialog() {
    this.router.navigate([{ outlets: { dialog: ['funding'] } }], {
      relativeTo: this.router.routerState.root.firstChild
    });
  }
}
