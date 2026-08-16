import { Component } from '@angular/core';
import { Form1 } from './components/form-1/form-1';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Form1],
})
export class App {}
