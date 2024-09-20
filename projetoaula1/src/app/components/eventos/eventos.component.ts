import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent implements OnInit {
  Show: boolean = false;


  constructor(){}
  
  ngOnInit(): void {}

  showMessage(): void {
    this.Show= !this.Show; //toggle no angular 
  }
}
