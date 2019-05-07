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
        icon: "",
        stamp: ""
    }
     
    

    componentDidMount(){
        this.searchWeather();
        this.showDate();
        
    }

    showDate = () => {
        var today = new Date();
        var day = today.getDay();
        var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
        console.log("Today is : " + daylist[day] + ".");
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        var prepand = (hour >= 12)? " PM ":" AM ";
        hour = (hour >= 12)? hour - 12: hour;
        if (hour===0 && prepand===' PM ') 
        { 
        if (minute===0 && second===0)
        { 
        hour=12;
        prepand=' Noon';
        } 
        else
        { 
        hour=12;
        prepand=' PM';
        } 
        } 
        if (hour===0 && prepand===' AM ') 
        { 
        if (minute===0 && second===0)
        { 
        hour=12;
        prepand=' Midnight';
        } 
        else
        { 
        hour=12;
        prepand=' AM';
        } 
        } 
        let stamp = (daylist[day] + "   " + hour + ":" + minute + prepand);
        this.setState({stamp: stamp})
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
    
                     <h6>{this.state.stamp}  </h6>
                     <hr></hr>
    
                     <div id="weathername"></div>
                     <div id="cityName">{this.state.city}</div>
                     <div id="temperature">Temp: {this.state.temp} F</div>
                     <div id="mainWeather">Sky: {this.state.main}    <img id="cloud" src={this.state.icon}></img> </div>
                      
                  
            </weather>
            
        );
    }
    
}

export default Weather;