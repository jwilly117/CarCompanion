import axios from "axios";


export default {
    showDistance : function(){
             return axios.get('/all')
             .then(function (response) {
               console.log(response);

             })
             .catch(function (error) {
               console.log("Error" +error);
             });
            
        }
    }
