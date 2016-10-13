import { Component, OnInit } from '@angular/core';

import { TipoTabla } from './tabla';
import {TablaService} from './tabla.service';
import {TABLA} from './inicializador-tabla';
import {Collapse} from './collapse.component';

@Component({
  selector: 'my-app',
  template: `
      <table id="Títulos">
          <th>concepto</th>
          <th>concepto2</th>
          <th>concepto3</th>
      </table>
      <table id="contenidos" *ngFor="let linea of tabla">
          <td id="celda">{{linea.UAI}} </td>
          <td id="celda">{{linea.concepto}}</td>
          <td id="celda">{{linea.id}}</td>
      </table>
    `,
   styleUrls: ['./styles.css'],

  styles: [`
    #contenidos {
      display: table;
      border: 2px solid #548;
      width: 1000px;
      text-align: center;
      margin: 562 auto;
      }
    #Títulos{
      display: table;
      border: 2px solid #548;
      width: 1000px;
      text-align: center;
      margin: 562 auto;

    }
    `],
  providers: [TablaService]
})

  export class AppComponent implements OnInit {

  constructor (private constructorTabla: TablaService){}

  tabla: TipoTabla[];


getTabla(): void{
  this.tabla=this.constructorTabla.getTabla();
  }

  ngOnInit(): void{
    this.getTabla();
  }
}