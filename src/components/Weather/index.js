//Import both react and the stylesheet from the same folder
import React from "react";
import "./style.css";
import API from "../../utils/API";

// ================================================================
//         WEATHER COMPONENT
// ================================================================



class Weather extends React.Component{

    state = {
        temp: 0,
        main: "",
        city: "",
        icon: ""
    }
     
    

    componentDidMount(){
        this.searchWeather();
        this.showDate();
    }

    showDate = () => {
        let d = new Date();
        console.log(d);
    }

    searchWeather = () => {
        API.search()
        .then( res => this.setState({
            temp: res.main.temp,
            main: res.weather[0].main,
            city: res.name,
            icon: "https://openweathermap.org/img/w/" + res.weather[0].icon + ".png"
        }))

        


        // console.log(this.state.res.main.temp);
        }
    

    render(){
        // this.searchWeather();
        return (
            <weather className="weather">
    
                     <h4>Local Weather:  </h4>
                     <hr></hr>
    
                     <div id="weathername">
                        <h5>{this.state.city}</h5>
                        <h6> {this.state.temp} F </h6>
                        <h6> {this.state.main}<img src={this.state.icon}></img></h6>
                     </div>
                     
            </weather>
            
        );
    }
    
}

export default Weather;