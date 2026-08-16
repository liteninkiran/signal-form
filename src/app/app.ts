import { Component } from '@angular/core';
import { Form2 } from './components/form-2/form-2';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Form2],
})
export class App {}
