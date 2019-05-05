//Import both react and the stylesheet from the same folder
import React from "react";
import "./style.css";

// ================================================================
//         MEDIA PLAYING COMPONENT
// ================================================================

function Media() {
    return (
        <div>
        <div id="music">
           <h6>
                Media Source: Spotify
                <hr></hr>
            </h6>
            <iframe id="spotify" src="https://open.spotify.com/embed/user/22p63tsyecfegvly2ozrgmbeq/playlist/2DNiY5m2HrFoUaqVx5OlUj" 
            frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        </div>

        </div>
    );
}


export default Media;

