//Komponenta Telo, ki vsebuje izpis podatkov o ekipi in vseh igralcev,
// ki so ločene podkomponente (implementirane kot polje komponent).

import * as React from 'react'
import '../../Css/Telo.css'
import { Igralec } from '../Modules/Oseba'
import Igralec2 from './Igralec2'
//import {Main} from '../Modules/Main';

export const Main=({igralci}: {igralci: Igralec[]})=>{
    return (
    <div>
        <h2>izpis podatkov o ekipi in vseh igralcev </h2>
        
        <ul>
        {igralci.map((igralec) => (
          <Igralec2 key={igralec.id} igralec={igralec} />
        ))}
      </ul>
       
    </div>
    )
}

   /* 
    <ul>
            {igralci.map((igralec: string, index: number): JSX.Element=>{
                return <li> {igralec}</li>
            })}
        </ul>
        {igralci.length<2 && <Footer/>}

   
   if(igralci.length>2){
        FooterCOnditional= <Footer />
    }*/
 
export default Main;