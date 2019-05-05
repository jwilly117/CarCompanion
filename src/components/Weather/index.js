//Import both react and the stylesheet from the same folder
import React from "react";
import "./style.css";

// ================================================================
//         WEATHER COMPONENT
// ================================================================

const APIKey = "166a433c57516f51dfab1f7edaed8413";
const queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Atlanta&units=imperial&appid=" + APIKey;



class Weather extends React.Component{

    

    


    // try componentDidMount()
    // weatherResults =() => {
    //     $.ajax({
    //         url: this.queryURL,
    //         method: "GET"
    //       })
    //         // We store all of the retrieved data inside of an object called "response"
    //         .then(function(response) {
        
    //           // Log the queryURL
    //           console.log(this.queryURL);
        
    //           // Log the resulting object
    //           console.log(response);
        
    //           // Transfer content to HTML
    //           $("#weathername").html("<h2>" + response.name + "</h2>");
    //            $("#weathername").append("Local Temperature: " + response.main.temp  );
    //            $("#weathername").append("\nHumidity: " + response.main.humidity);
    //           // $("#weathername").append("\Weather: " + response.main.description);
        
    //           // $(".temp").text("Temperature (F) " + response.main.temp);
        
    //           // Log the data in the console as well
    //           console.log("Wind Speed: " + response.wind.speed);
    //           console.log("Humidity: " + response.main.humidity);
    //           console.log("Temperature (F): " + response.main.temp);
    //         });

    // }

    render(){
        return (
            <weather className="weather">
    
                     <h4>Local Weather:  </h4>
                     <hr></hr>
    
                     <div id="weathername">
                        <h5>Atlanta:</h5>
                        <h6> 73 Degrees F</h6>
                        <h6> Chance of Rain: 60%</h6>
                     </div>
                     
            </weather>
            
        );
    }
    
}

export default Weather;