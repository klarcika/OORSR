import React from "react";
import { Igralec } from "../Modules/Main";
//import "./Igralec.css";

function Igralec2({ igralec }: { igralec: Igralec }) {
  return (
    <>
      <li>{igralec.ime }</li>
      <ul>
        <li>{igralec.letoRojstva}</li>
        <li>
          Višina: {igralec.visina} cm, Teža: {igralec.teza} kg
        </li>
        <li>Poškodovan: {igralec.poskodovan === true ? "Da" : "Ne"}</li>
      </ul>
      <br />
    </>
  );
}

export default Igralec2;