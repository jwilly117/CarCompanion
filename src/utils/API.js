import axios from "axios";


let APIKey = "166a433c57516f51dfab1f7edaed8413";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Atlanta,Georgia&units=imperial&appid=";

export default {
    search: function(){
        return axios.get(queryURL + APIKey);
    }
};
