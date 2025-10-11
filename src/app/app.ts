import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { InfoFooterComponent } from './components/shared/info-footer.component/info-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ContactComponent, InfoFooterComponent],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
