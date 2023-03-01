import{Igralec, Funkcionar} from "./Oseba"
import{Ekipa} from "./Ekipa"



const Lawliet: Funkcionar={ //direktor
    ime: "L Lawliet",
    letoRojstva: 1979,
    id: 1,
    vloga: "direktor",
    veljavnost: 1
}

const Light: Funkcionar={ //Trener
    ime: "Light Yagami",
    letoRojstva: 1986,
    id: 2,
    vloga: "trener",
    veljavnost: 2
}


const Misa: Igralec={ //igralec
    ime: "Misa Amane",
    letoRojstva: 1984,
    id: 3,
    visina: 157,
    teza: 40,
    poskodovan: false
}
const Mello: Igralec={ //igralec
    ime: "Mello",
    letoRojstva: 1989,
    id: 4,
    visina: 168,
    teza: 49,
    poskodovan: true
}
const Ryuk: Igralec={ //igralec
    ime: "Ryuk",
    letoRojstva: 1234,
    id: 5,
    visina: 200,
    teza: 50,
    poskodovan: false   
}
const Near: Igralec={ //igralec
    ime: "Nate River",
    letoRojstva: 1991,
    id: 6,
    visina: 152,
    teza: 39,
    poskodovan: false   
}



const JapaneseTaskForce: Ekipa= new Ekipa( "JapaneseTaskForce", 1991, Lawliet, Light)

JapaneseTaskForce.dodajIgralca(Misa)
JapaneseTaskForce.dodajIgralca(Mello)
JapaneseTaskForce.dodajIgralca(Ryuk)
JapaneseTaskForce.dodajIgralca(Near)

console.log("izpis podatkov", JapaneseTaskForce.izpisiPodatke(), );

console.log("poosodobitev teza igralca Misa",Misa.teza=35)

JapaneseTaskForce.posodobiIgralca(Misa);
console.log()

console.log( JapaneseTaskForce.izpisiPodatke(),"izpis po posodobitvi");

console.log()
JapaneseTaskForce.odstraniIgralca(4)

console.log(JapaneseTaskForce.izpisiPodatke(),"izpis po izbrisu")