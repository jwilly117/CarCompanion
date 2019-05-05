//Import both react and the stylesheet from the same folder
import React from "react";
import "./style.css";

// ================================================================
//         CONTROLS COMPONENT
// ================================================================


// Need to add some bootstrap controls


class Controls extends React.Component {

    hello={
        message: "hi"
    };

    handleClick = () => {
        console.log("Hello there");
    }

    // startCam = () => {
    //   let
    //       // context = canvas.getContext('2d'),
    //       video = document.getElementById('video'),
    //       vendorUrl = window.URL || window.webkitURL;

    //   navigator.getMedia = navigator.getUserMedia ;
    //   navigator.getMedia({
    //     video: true,
    //     audio: false

    //   }, function(stream){
    //     video.src=stream;
    //     video.play();
    // }, function(error){
    //   //An error has occured
    // });
    // }
    
    camera = () => {
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
       navigator.mozGetUserMedia || navigator.meGetUserMedia;

       if (navigator.getUserMedia){
         navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
       }
    }

    handleVideo = (stream) => {
      document.querySelector('#video').srcObject = stream;
    }

    videoError = (e) => {
      alert("There is an error");
    }


    render(){
      // this.startCam();
      this.camera();
        return (
            <div id="controls">  

              <a href="#directions" data-toggle="modal" class="btn btn-dark"> Directions </a>
              <a href="#camera" data-toggle="modal" class="btn btn-dark"> Camera </a>
              <a href="#calendar" data-toggle="modal" class="btn btn-dark"> Calendar </a>
              <a href="#parkAssist" data-toggle="modal" class="btn btn-dark"> Park Assist </a>
              <a href="#placeholder" data-toggle="modal" class="btn btn-dark"> ~PLACEHOLDER~ </a>



            {/* MODAL FOR THE DIRECTIONS PANE */}
              <div>
                <div class="modal fade" id="directions" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        
            </div> 


            {/* MODAL FOR THE CAMERA PANE */}
            <div>
              <div class="modal fade" id="camera" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog " role="document">
                  <div class="modal-content">
                    <div className="modal-header">
                      <h5 class="modal-title" id="exampleModalCenterTitle">Rear View Camera</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      
                    <div id="booth">
                        <video id="video" autoplay="true" width="440" height="330">  
                        No Camera Support for your device :(
                         </video>
                      </div>

                    </div>
                    {/* <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div> */}
                  </div>
                </div>
              </div>

            </div>

            {/* MODAL FOR GOOGLE CALENDAR INTERFACE */}
            <div>
              <div class="modal fade bd-example-modal-lg" id="calendar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalCenterTitle">Google Calendar!</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div id="calendarModal" class="modal-body">
                    <iframe id="cal" src="https://calendar.google.com/calendar/embed?mode=DAY&amp;height=500&amp;wkst=1&amp;bgcolor=%239999ff&amp;src=jakewilliams117%40gmail.com&amp;color=%232F6309&amp;ctz=America%2FNew_York" scrolling="no"></iframe>  

                    </div>

                    {/* <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div> */}
                  </div>
                </div>
              </div>

            </div>

            {/* MODAL FOR PARKING ASSISTANT */}
            <div>
              <div class="modal fade" id="parkAssist" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalCenterTitle">Parking Assistant</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    
                    <div className="container-fluid">

                      <div className="row">
                      <div class="col-md-4" id="left" >Left Sensor</div>
                      <div class="col-md-4 ml-auto" id="right">Right Sensor</div>

                      </div>
                    
                    </div>

                    <img id="carIcon" src="http://i64.tinypic.com/2cwsphg.jpg" border="0" alt="Image and video hosting by TinyPic"></img>

                    </div>
                    {/* <div class="modal-footer">
                      <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                    </div> */}
                  </div>
                </div>
              </div>

            </div>


            {/* MODAL FOR SOMETHIN??? */}
            <div>
              <div class="modal fade" id="placeholder" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">
                      ...
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>


            </div>
        );
    }
    
}


export default Controls;

