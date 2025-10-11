import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-funding-dialogue',
  imports: [],
  templateUrl: './funding-dialogue.component.html',
  styleUrl: './funding-dialogue.component.css',
  standalone: true
})
export class FundingDialogueComponent {
  private router = inject(Router);

  closeDialog() {
    this.router.navigateByUrl('/career');
  }
}
