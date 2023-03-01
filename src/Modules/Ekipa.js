"use strict";
exports.__esModule = true;
exports.Ekipa = void 0;
var Ekipa = /** @class */ (function () {
    function Ekipa(ime, letoUstanovitve, direktor, trener) {
        this.ime = ime,
            this.letoUstanovitve = letoUstanovitve,
            this.direktor = direktor,
            this.trener = trener,
            this.igralci = [];
    }
    Ekipa.prototype.dodajIgralca = function (igralec) {
        this.igralci.push(igralec);
    };
    Ekipa.prototype.posodobiIgralca = function (igralec) {
        for (var i = 0; i < this.igralci.length; i++) {
            if (this.igralci[i].id === igralec.id) {
                this.igralci[i] = igralec;
                break;
            }
        }
    };
    Ekipa.prototype.odstraniIgralca = function (id) {
        for (var i = 0; i < this.igralci.length; i++) {
            if (id === this.igralci[i].id) {
                this.igralci = this.igralci.filter(function (p) { return p.id !== id; });
                break;
            }
        }
        /* for(let i=0; i< this.igralci.length; i++){
             if(this.igralci[i].id=== id){
                 this.igralci.slice(0,i) //to ni prav
             }
         }*/
    };
    Ekipa.prototype.izpisiPodatke = function () {
        var ekipa = "Ekipa: ".concat(this.ime, "\n");
        ekipa += "Direktor: ".concat(this.direktor.ime, "\n");
        ekipa += "Ekipa: ".concat(this.trener.ime, "\n");
        for (var _i = 0, _a = this.igralci; _i < _a.length; _i++) {
            var igralec = _a[_i];
            ekipa += "Igralci ".concat(igralec.id, ": ").concat(igralec.ime, ", \"leto rojstva: \" ").concat(igralec.letoRojstva, ",\"visina: \" ").concat(igralec.visina, ",\"teza: \" ").concat(igralec.teza, "\n ");
        }
        return ekipa;
    };
    return Ekipa;
}());
exports.Ekipa = Ekipa;
