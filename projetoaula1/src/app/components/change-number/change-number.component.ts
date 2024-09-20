import { Component, OnInit , Output , EventEmitter} from '@angular/core';
//OnInit pra criar o export implements Onitit;
//Output para exportar dados pra classe pai
//EventEmitter para enviar eventos para o pai
@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent implements OnInit {
    @Output() changeNumber:EventEmitter <any> = new EventEmitter()
    constructor(){}
    ngOnInit(): void {
    }
    HandleClick(){
      this.changeNumber.emit();
      console.log("Mudou o número");

    }
}
