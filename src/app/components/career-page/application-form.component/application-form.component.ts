import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ContactForm, ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-application-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css',
  standalone: true
})
export class ApplicationFormComponent {

  private contactService = inject(ContactService);

  formData: ContactForm = {
    name: '',
    email: '',
    title: '',
    message: ''
  };

  errorMessage?: string

  onSubmit() {
    this.contactService.sendMessage(this.formData).subscribe({
      next: () => {
        alert('Thanks for applying! We’ll get back to you soon.');
        this.errorMessage = undefined;
      },
      error: (err) => {
       console.log(err);
       this.errorMessage = err;
      }
    });
  }
}
