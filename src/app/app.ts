import { Component } from '@angular/core';
import { Form1 } from './components/form-1/form-1';
import { Form2 } from './components/form-2/form-2';
import { Form3 } from './components/form-3/form-3';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Form3],
})
export class App {}
