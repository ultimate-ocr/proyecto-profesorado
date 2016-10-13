"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tabla_service_1 = require('./tabla.service');
var AppComponent = (function () {
    function AppComponent(constructorTabla) {
        this.constructorTabla = constructorTabla;
    }
    AppComponent.prototype.getTabla = function () {
        this.tabla = this.constructorTabla.getTabla();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getTabla();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <table id=\"T\u00EDtulos\">\n          <th>concepto</th>\n          <th>concepto2</th>\n          <th>concepto3</th>\n      </table>\n      <table id=\"contenidos\" *ngFor=\"let linea of tabla\">\n          <td id=\"celda\">{{linea.UAI}} </td>\n          <td id=\"celda\">{{linea.concepto}}</td>\n          <td id=\"celda\">{{linea.id}}</td>\n      </table>\n    ",
            styleUrls: ['./styles.css'],
            styles: ["\n    #contenidos {\n      display: table;\n      border: 2px solid #548;\n      width: 1000px;\n      text-align: center;\n      margin: 562 auto;\n      }\n    #T\u00EDtulos{\n      display: table;\n      border: 2px solid #548;\n      width: 1000px;\n      text-align: center;\n      margin: 562 auto;\n\n    }\n    "],
            providers: [tabla_service_1.TablaService]
        }), 
        __metadata('design:paramtypes', [tabla_service_1.TablaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map