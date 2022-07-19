import React, { Component } from "react";
import "./Contenido.css";
import Card from "../cards/Card";
import tarjetas from "../../data/CardsInfo.json";

class Contenido extends Component {
  render() {
    return (
      <main>
        <h1 className="Cuerpo">Contenido </h1>
        {tarjetas.map((pepito, index) => (
          <Card
            key={index}
            imag={pepito.imag}
            alt={pepito.alt}
            titulo={pepito.titulo}
            texto={pepito.texto}
            link={pepito.link}
            inb={pepito.inb}
          />
        ))}
      </main>
    );
  }
}

export default Contenido;
