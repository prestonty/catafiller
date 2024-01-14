import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
// import {scanImage} from "../utils/vision.js";

// -----------------------------------------------------------------------
const vision = require('@google-cloud/vision');
const fs = require('fs');
// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = './public/healthCards/healthCard1.jpg';

// export
async function scanImage() {
    try {
      // Performs text detection on the local file
      const [result] = await client.textDetection(fileName);
      const detections = result.textAnnotations;
      console.log('Text:');
      // detections.forEach(text => console.log(text.description));
      detections.forEach(text => 
      {if(text.description.includes("-") && text.description.length == 12) {
        console.log(text.description);
        // return text.description;
      }});
      
      // rest of your code using the result
    } catch (error) {
      console.error("Error:", error);
    }
}

// -----------------------------------------------------------------------

function Cam
(props) {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

    const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImg(imageSrc);

    // NOT HARD CODED AT ALL!!!
    // scanImage();
    console.log("ASDASD");

  }, [webcamRef]);

  return (
    <div className="Container">
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={400}
            width={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}
    </div>
  );
}

export default Cam;