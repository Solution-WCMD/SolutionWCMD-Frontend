import { Component } from '@angular/core';
import { LucideAngularModule, Youtube, Github, Heart, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-info-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './info-footer.component.html',
  styleUrls: ['./info-footer.component.css']
})
export class InfoFooterComponent {
  icons = { Youtube, Github, Heart, MessageCircle };

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
