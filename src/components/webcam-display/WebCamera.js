import React, { Component } from "react"
import WebCam from "react-webcam"
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';

class WebCamera extends Component {


    constructor(props) {
        super(props);
        //const canvasReference = React.createRef();

        this.state = {
            enabled: false,
            webcam: null,
            screenShot: null,
        }
    }

    webcamReference = webcam => {
        this.setState({ webcam: this.webcam })
    }

    captureVideo = () => {
        this.setState({ enabled: true })
    }

    render() {

        return (
            <Grid container>
                {this.state.enabled ? (
                    <WebCam
                        audio={false}
                        mirrored={true}
                        ref={this.webcamReference}
                        screenshotFormat="image/jpeg"
                        className="cam-display"
                    >
                        <IconButton aria-label='camera-icon' >
                            <PhotoCameraIcon />
                        </IconButton>
                    </WebCam>
                ) :
                    <Grid container item
                       // ref={this.canvasReference}
                        className="cam-display"
                    >
                        <IconButton aria-label='camera-icon' onClick={this.captureVideo} >
                            <VideocamIcon />
                        </IconButton>
                    </Grid>



                }


            </Grid>);
    }

}

export default WebCamera;