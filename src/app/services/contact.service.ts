import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactForm {
  name: string,
  email: string,
  title: string,
  message: string
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private httpClient = inject(HttpClient);
  private contactUrl = `${environment.backendBaseUrl}/api/contact/send`;

  sendMessage(form: ContactForm) : Observable<Object> {
    let urlWithParams = this.contactUrl;

    if (form.name) {
      urlWithParams = urlWithParams + "?application=true"
    } else {
      urlWithParams = urlWithParams + "?application=false"
    }

    return this.httpClient.post(urlWithParams, form);
  }
}
