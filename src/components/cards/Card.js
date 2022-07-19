import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imag} alt={this.props.alt} />
        <h1>{this.props.titulo}</h1>
        <p>{this.props.texto}</p>
        <button src={this.props.link}>{this.props.inb}</button>
      </div>
    );
  }
}

export default Card;
