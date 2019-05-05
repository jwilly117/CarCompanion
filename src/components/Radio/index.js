//Import all components
import React, { Component } from "react";
import Container from "../Container";
import Weather from "../Weather";
import MapWindow from "../MapWindow";
import Media from "../Media";
import Controls from "../Controls";
import "./style.css";

// ================================================================
//         FULL RADIO COMPILATION COMPONENT
// ================================================================


class Radio extends Component {

    render() {
        return( 
            <div id="Main">
            <Container>
            <Weather />
            <Controls/>
            <MapWindow/>
            <Media/>
            
            </Container>
            </div>
            
        );
    };
};


export default Radio;

