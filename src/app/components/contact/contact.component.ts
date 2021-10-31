import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MatSnackbarService } from '../../modules/mat/services/mat-snackbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private readonly http: HttpClient,
    private readonly fb: FormBuilder,
    private readonly snackbar: MatSnackbarService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      subject: [undefined, [Validators.required]],
      message: [undefined, [Validators.required]],
    });
  }

  submit(): void {
    const formValue = this.contactForm.value;

    const formData = new FormData();
    formData.append('name', formValue.name);
    formData.append('email', formValue.email);
    formData.append('subject', formValue.subject);
    formData.append('message', formValue.message);

    this.http
      .post(environment.actionFormsIoUrl, formData, { headers: { 'sec-fetch-mode': 'no-cors' } })
      .pipe(take(1))
      .subscribe(
        () => {
          this.snackbar.open({ message: 'Successfully sent!' });
          this.contactForm.reset();
        },
        () => this.snackbar.open({ message: 'Failed to send' })
      );
  }
}
