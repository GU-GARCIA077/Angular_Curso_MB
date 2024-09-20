import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent implements OnInit {

  mynumber: number = 0;

  constructor(){}
  ngOnInit(): void {
  }
  onchangeNumber(){
    this.mynumber= Math.floor (Math.random()*10)
  }
}
