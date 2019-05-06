import axios from "axios";

export default {
    showDistance : function(){
             return axios.get('/all')
            .then(function(res, err) {
                if (err) console.log(err);
                console.log(res.data);
                return res.data
            })
        }
    }
