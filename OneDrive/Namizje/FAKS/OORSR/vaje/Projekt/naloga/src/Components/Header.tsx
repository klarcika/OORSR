// to je Menu, ki vsebuje ime ekipe v komponenti <h1>
import React from 'react'
import '../../Css/Header.css'
export const Header=({ime}: {ime: string}): JSX.Element=>{
    return (
    <div className='header'>
        <h1> Ekipa : {ime}</h1>     
    </div>
    )
    ;
       //div je komponenta ki je bla samo prepisana kot dom da lahko uporabljamo jsx
}



export default Header;
