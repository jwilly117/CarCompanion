import axios from "axios";
// import router from "../routing/handlers"


let APIKey = "166a433c57516f51dfab1f7edaed8413";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Atlanta,Georgia&units=imperial&appid=";

export default {
    search: function(){
        return axios.get(queryURL + APIKey)
        .then(function(res, err){
            if (err) console.log(err);
            console.log(res.data);
            return res.data;
        });
    }
};
