import{Igralec, Funkcionar}  from "./Oseba"

class Ekipa{
   ime: string
   letoUstanovitve: number
   direktor: Funkcionar
   trener: Funkcionar
   igralci: Igralec[]

   constructor(ime: string, letoUstanovitve: number, direktor: Funkcionar, trener: Funkcionar){
    this.ime=ime,
    this.letoUstanovitve= letoUstanovitve,
    this.direktor=direktor,
    this.trener=trener,
    this.igralci=[] 
}

   dodajIgralca(igralec: Igralec): void{
    this.igralci.push(igralec)
   }

   posodobiIgralca(igralec: Igralec):void{ //to popravi ker ni fajn vezat id na length
    for(let i=0; i< this.igralci.length; i++){
        if(this.igralci[i].id === igralec.id){
                this.igralci[i] = igralec;
                break;
    }
   }
}
   odstraniIgralca(id: number):void{ // to je vredu
    for(let i=0; i<this.igralci.length; i++){
        if(id===this.igralci[i].id){
            this.igralci = this.igralci.filter(p => p.id !== id);
            break;
        }
    }
  
   /* for(let i=0; i< this.igralci.length; i++){
        if(this.igralci[i].id=== id){
            this.igralci.slice(0,i) //to ni prav
        }
    }*/
   }

   izpisiPodatke():string{  // to se mores dodat
  let ekipa= `Ekipa: ${this.ime}\n`;
  ekipa += `Direktor: ${this.direktor.ime}\n`;
  ekipa+=`Ekipa: ${this.trener.ime}\n`
  for(const igralec of this.igralci){
    ekipa +=`Igralci ${igralec.id}: ${igralec.ime}, "leto rojstva: " ${igralec.letoRojstva},"visina: " ${igralec.visina},"teza: " ${igralec.teza}\n `
  }
  return ekipa;
   }
}
export{Ekipa}