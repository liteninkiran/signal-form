import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';

interface LoginFormModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [FormRoot, FormField, CommonModule],
})
export class App {
  model = signal<LoginFormModel>({
    email: '',
    password: '',
  });
  loginForm = form(this.model);
}
