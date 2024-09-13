import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName= 'Joaquim';
  userData = {
    email: 'jocajoaquines@gmail.com',
    job: 'Analista de sistemas',

  }
  title = 'projetoaula1';
}
