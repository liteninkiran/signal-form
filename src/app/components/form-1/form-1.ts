import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';

interface LoginFormModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-form-1',
  templateUrl: './form-1.html',
  styleUrl: './form-1.scss',
  imports: [FormRoot, FormField, CommonModule],
})
export class Form1 {
  model = signal<LoginFormModel>({
    email: '',
    password: '',
  });
  loginForm = form(this.model);

  setModel() {
    this.model.set({
      email: 'model.set@example.com',
      password: 'test',
    });
  }

  updateModel() {
    this.model.update((prev) => ({
      email: 'model.update@example.com',
      password: prev.password,
    }));
  }

  setFieldTree() {
    this.loginForm().value.set({
      email: 'field.tree.set@example.com',
      password: 'test',
    });
  }

  setFieldValue() {
    this.loginForm.email().value.set('field.value.set@example.com');
    this.loginForm.password().value.set('test');
  }
}
