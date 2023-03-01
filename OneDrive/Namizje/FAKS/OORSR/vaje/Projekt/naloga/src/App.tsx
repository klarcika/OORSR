import React, { useEffect } from "react";
import './App.css';
import Main from './Components/Telo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Igralec , Funkcionar} from './Modules/Oseba';
import Opozorilo from "./Components/Opozorilo";
import Info from "./Components/Info";


function App() {
  useEffect(() => {
    document.title = "Ekipa";
  }, []);

  const Lawliet: Funkcionar={
    ime: "L Lawliet",
    letoRojstva: 1979,
    id: 1,
    vloga: "direktor",
    veljavnost: 1

  }

  const Light: Funkcionar={
    ime: "Light Yagami",
    letoRojstva: 1986,
    id: 2,
    vloga: "trener",
    veljavnost: 2
  }

const igralci: Igralec[]=[
  {  ime: "Misa Amane",
    letoRojstva: 1984,
      id: 3,
    visina: 157,
  teza: 40,
  poskodovan: false
},
{  ime: "Mello",
letoRojstva: 1989,
id: 4,
visina: 168,
teza: 49,
poskodovan: true

},{
  ime: "Ryuk",
  letoRojstva: 1234,
  id: 5,
  visina: 200,
  teza: 50,
  poskodovan: false 

},{
  ime: "Nate River",
  letoRojstva: 1991,
  id: 6,
  visina: 152,
  teza: 39,
  poskodovan: false   
}]

const JapaneseTaskForce={
  ime: "JapaneseTaskForce",
  letnicaUstanovitve: 1991, 
  direktor: Lawliet, 
  trener: Light,
  igralci: igralci
} 

  return(
    <>
    <Header ime={JapaneseTaskForce.ime} />
      {igralci.length < 11 ? <Opozorilo /> : <Info />}
      <Main igralci={JapaneseTaskForce.igralci} />
      <Footer />
    </>
  );

}

export default App;
