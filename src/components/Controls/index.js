//Import both react and the stylesheet from the same folder
import React from "react";
import "./style.css";
import sense from "../../utils/sense";
import axios from 'axios';

// let serialport = require("serialport");
// let portName = "COM6";

// ================================================================
//         CONTROLS COMPONENT
// ================================================================


class Controls extends React.Component {

  state = {
    left: 0,
    right:0
  }

  getDistance = () => {

    axios.get('/all')
             .then( res => {
               console.log(res);
               this.setState({ left: res.data[0].inches, right: res.data[0].inches2})
              return res;
             })
             .catch( error => {
               console.log("Error" +error);
             });

  }

  componentDidMount(){
    setInterval(this.getDistance, 200);

    
  }
    //Camera Input Renders if the user has a camera shared with the browser
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

    //Now to render

    render(){
      // this.camera();
      // this.setup();
        return (
            <div id="controls">  

              <a href="#directions" data-toggle="modal" class="btn btn-dark"> Directions </a>
              <a href="#camera" data-toggle="modal" class="btn btn-dark"> Camera </a>
              <a href="#calendar" data-toggle="modal" class="btn btn-dark"> Calendar </a>
              <a href="#parkAssist" data-toggle="modal" class="btn btn-dark"> Park Assist </a>
              <a href="#placeholder" data-toggle="modal" class="btn btn-dark"> Phone </a>



            {/* MODAL FOR THE DIRECTIONS PANE /////////////////////////////////////////////////////////////// */}
              <div>
                <div class="modal fade" id="directions" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog " role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Enter Desired Destination</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    
                            <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Starting Point:</label>
                      <input type="text" class="form-control" id="recipient-name"></input>
                    </div>

                    <div class="form-group">
                      <label for="message-text" class="col-form-label">Destination:</label>
                      <input class="form-control" id="message-text"></input>
                    </div>

                  </form>

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Go!</button>
                  </div>
                </div>
              </div>
            </div>
        
            </div> 


            {/* MODAL FOR THE CAMERA PANE ///////////////////////////////////////////////////////////////*/}
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

            {/* MODAL FOR GOOGLE CALENDAR INTERFACE ///////////////////////////////////////////////////////////////*/}
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

            {/* MODAL FOR PARKING ASSISTANT /////////////////////////////////////////////////////////////// */}
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
                      <div class="col-md-4" id="left" >{this.state.left}in</div>
                      <div class="col-md-4 ml-auto" id="right"> {this.state.right}in </div>
                    
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


            {/* MODAL FOR SOMETHING????? /////////////////////////////////////////////////////////////// */}
            <div>
              <div class="modal fade" id="placeholder" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalCenterTitle">Feature Coming Soon</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">
                    <img id="construction" src="https://georgetowner.com/wp-content/uploads/2018/08/under-construction-2408061_640.png" border="0" alt="Image and video hosting by TinyPic"></img>
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

