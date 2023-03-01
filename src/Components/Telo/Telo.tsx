//Komponenta Telo, ki vsebuje izpis podatkov o ekipi in vseh igralcev,
// ki so ločene podkomponente (implementirane kot polje komponent).

import * as React from 'react'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
//import {Main} from '../Modules/Main';

const igralci=['igralec1', 'igralec2']

export const Main=()=>{
    const FooterCOnditional: JSX.Element | null = null;
    return (
    <div>
        <h2>izpis podatkov o ekipi in vseh igralcev </h2>
        
        <ul>
            {igralci.map((igralec: string, index: number): JSX.Element=>{
                return <li> {igralec}</li>
            })}
        </ul>
        {igralci.length<2 && <Footer/>}

    </div>
    )
}

   /* if(igralci.length>2){
        FooterCOnditional= <Footer />
    }*/
 


export default Main;