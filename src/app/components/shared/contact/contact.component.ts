import {afterNextRender, Component, DestroyRef, inject, viewChild} from '@angular/core';
import {FormGroup, FormsModule, NgForm} from '@angular/forms';
import {debounceTime} from 'rxjs';
import {ContactService} from '../../../services/contact.service';

interface ContactData {
  email: string,
  reason: string,
  message: string
}

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  private contactForm = viewChild.required<NgForm>('contact');
  private contactService = inject(ContactService);
  private destroyReference = inject(DestroyRef);

  submitted = false;
  errorMessage?: string

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-contact-form');

      if (savedForm) {
        const loadedFormData: ContactData = JSON.parse(savedForm);

        setTimeout(() => this.contactForm().setValue(loadedFormData), 1);
      }

      const subscription = this.contactForm().valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) => window.localStorage.setItem(
            'saved-contact-form',
            JSON.stringify({ email: value.email, reason: value.reason, message: value.message })
          ),
        });

      this.destroyReference.onDestroy(() => subscription?.unsubscribe);
    });
  }

  onSubmit(contactData: NgForm) {
    if (contactData.form.valid) {
      this.sendContactForm(contactData.form);

      contactData.form.reset();
    }
  }

  private sendContactForm(form: FormGroup){
    const enteredEmail = form.value.email;
    const enteredReason = form.value.reason;
    const enteredMessage = form.value.message;

    this.contactService.sendMessage({
      name: "",
      email: enteredEmail,
      title: enteredReason,
      message: enteredMessage
    }).subscribe({
      next: () => {
        this.submitted = true;
        this.errorMessage = undefined;
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err;
      }
    })
  }

}
