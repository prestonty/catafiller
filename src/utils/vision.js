// const vision = require('@google-cloud/vision');
// const fs = require('fs');
// // Creates a client
// const client = new vision.ImageAnnotatorClient();

// /**
//  * TODO(developer): Uncomment the following line before running the sample.
//  */
// const fileName = './public/healthCards/healthCard1.jpg';

// // export
// async function scanImage() {
//     try {
//       // Performs text detection on the local file
//       const [result] = await client.textDetection(fileName);
//       const detections = result.textAnnotations;
//       console.log('Text:');
//       // detections.forEach(text => console.log(text.description));
//       detections.forEach(text => 
//       {if(text.description.includes("-") && text.description.length == 12) {
//         console.log(text.description);
//         // return text.description;
//       }});
      
//       // rest of your code using the result
//     } catch (error) {
//       console.error("Error:", error);
//     }
// }

// scanImage();
// console.log("YO");