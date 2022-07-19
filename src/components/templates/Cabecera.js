import React, {Component} from "react";
import "./Cabecera.css"

class TopPage extends Component {

    render() {
        return(
            <header>
                <h1 className="cabecera">{this.props.title}</h1>
            </header>
        )
    }
}

export default TopPage