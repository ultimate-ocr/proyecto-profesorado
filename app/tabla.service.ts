import { Injectable } from '@angular/core';

import {TipoTabla } from './tabla';
import {TABLA} from './inicializador-tabla';

@Injectable()
export class TablaService {

  getTabla(): TipoTabla[] {
      return TABLA;
  }
}
