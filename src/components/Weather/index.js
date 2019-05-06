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
        city: ""
    }
     


    componentDidMount(){
        this.searchWeather();
    }

    searchWeather = () => {
        API.search()

        .then(response => this.setState({temp: response.main.temp,
             main: response.weather[0].main,
             city: response.name
            }))
         
        console.log(this.state.city);
        console.log(this.state.temp)
        // console.log(this.temp)
        // console.log(this.state.res.main.temp);
        }
    

    render(){
        
        return (
            <weather className="weather">
    
                     <h4>Local Weather:  </h4>
                     <hr></hr>
    
                     <div id="weathername">
                        <h5>{this.state.city}</h5>
                        <h6> 73 Degrees F</h6>
                        <h6> Chance of Rain: 60%</h6>
                     </div>
                     
            </weather>
            
        );
    }
    
}

export default Weather;