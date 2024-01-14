// import React from "react";
// import Webcam from "react-webcam";

// export default function Cam() {
//     // web cam
//     const videoConstraints = {
//         width: 1280,
//         height: 720,
//         facingMode: "user"
//     };

//     const webcamRef = React.useRef(null);
//     const capture = React.useCallback(
//       () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//       },
//       [webcamRef]
//     );

//     return(<div>
//             <Webcam
//                 audio={false}
//                 height={720}
//                 screenshotFormat="image/jpg"
//                 width={1280}
//                 videoConstraints={videoConstraints}>
//                     <button onClick={capture}>Capture photo</button>
//             </Webcam>
//         </div>);
// }