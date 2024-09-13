import { Component } from '@angular/core';

@Component({
  selector: 'app-first-cp',
  templateUrl: './first-cp.component.html',
  styleUrl: './first-cp.component.css'
})
export class FirstCpComponent {
  name:string ='Gustavo';
  age: number = 23 ;
  job:string ='programador full stack';
  hobbies= ['Correr','Jogar','Estudar'];
  carro ={
    namecar: 'Uno mille way',
    yearfab: 1998,
  }


  constructor(){}

  ngOnInit(): void {}
}
