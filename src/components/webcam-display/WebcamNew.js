import React, { Component, useState } from "react"
import WebCam from "react-webcam"
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import axios from 'axios'
import "./WebCamera.css";

function WebcamNew () {

   const [enable, setEnable] =  useState(false)

    const webcamRef = React.useRef(null);

    function dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }
    
  const capture = React.useCallback(
    
    () => {
    setTimeout(function(){ const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        var image = new Image();
        image.src = imageSrc;
        var file = dataURLtoFile(imageSrc,'hello.jpeg');
        let data = new FormData();
        data.append('image', file,'test.jpeg');

        axios.post('http://localhost:8000/recommendation',data,{
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data`,
        }
      }).then(res => {
          console.log(res)
      }).catch((e) => {
        console.log(e)
      }) }, 3000);

        

      
    },
    [webcamRef]
  );
  
    return (
        <Grid container>
                {enable ? (
                    <>
                    <WebCam
                        audio={false}
                        mirrored={true}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="cam-display"
                    >
                        <IconButton aria-label='camera-icon' >
                            <PhotoCameraIcon />
                        </IconButton>
                    </WebCam>  <button className="btn" onClick={() =>capture()}>Capture photo</button> </>
                ) :
                    <Grid container item
                       // ref={this.canvasReference}
                        className="cam-display"
                    >
                        <IconButton aria-label='camera-icon' onClick={()=> setEnable(true)} >
                            <VideocamIcon />
                        </IconButton>

                       
                    </Grid>



                }


            </Grid>);
    
}

export default WebcamNew