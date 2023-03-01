// to je Menu, ki vsebuje ime ekipe v komponenti <h1>
import React from 'react'
//import {Main} from "../../Modules/Igralec/Igralec"
export const Header=(): JSX.Element=>{
    return (
    <div>
        <h1> ime ekipe</h1>     
    </div>
    )
    ;
       //div je komponenta ki je bla samo prepisana kot dom da lahko uporabljamo jsx
}



export default Header;
