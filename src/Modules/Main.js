"use strict";
exports.__esModule = true;
var Ekipa_1 = require("./Ekipa");
var Lawliet = {
    ime: "L Lawliet",
    letoRojstva: 1979,
    id: 1,
    vloga: "direktor",
    veljavnost: 1
};
var Light = {
    ime: "Light Yagami",
    letoRojstva: 1986,
    id: 2,
    vloga: "trener",
    veljavnost: 2
};
var Misa = {
    ime: "Misa Amane",
    letoRojstva: 1984,
    id: 3,
    visina: 157,
    teza: 40,
    poskodovan: false
};
var Mello = {
    ime: "Mello",
    letoRojstva: 1989,
    id: 4,
    visina: 168,
    teza: 49,
    poskodovan: true
};
var Ryuk = {
    ime: "Ryuk",
    letoRojstva: 1234,
    id: 5,
    visina: 200,
    teza: 50,
    poskodovan: false
};
var Near = {
    ime: "Nate River",
    letoRojstva: 1991,
    id: 6,
    visina: 152,
    teza: 39,
    poskodovan: false
};
var JapaneseTaskForce = new Ekipa_1.Ekipa("JapaneseTaskForce", 1991, Lawliet, Light);
JapaneseTaskForce.dodajIgralca(Misa);
JapaneseTaskForce.dodajIgralca(Mello);
JapaneseTaskForce.dodajIgralca(Ryuk);
JapaneseTaskForce.dodajIgralca(Near);
console.log("izpis podatkov", JapaneseTaskForce.izpisiPodatke());
console.log("poosodobitev teza igralca Misa", Misa.teza = 35);
JapaneseTaskForce.posodobiIgralca(Misa);
console.log();
console.log(JapaneseTaskForce.izpisiPodatke(), "izpis po posodobitvi");
console.log();
JapaneseTaskForce.odstraniIgralca(4);
console.log(JapaneseTaskForce.izpisiPodatke(), "izpis po izbrisu");
