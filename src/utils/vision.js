const vision = require('@google-cloud/vision');
const fs = require('fs');
// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = './public/healthCards/healthCard1.jpg';

async function scanImage() {
    try {
      // Performs text detection on the local file
      const [result] = await client.textDetection(fileName);
      const detections = result.textAnnotations;
      console.log('Text:');
      detections.forEach(text => console.log(text));
      
      // rest of your code using the result
    } catch (error) {
      console.error("Error:", error);
    }
}


async function scanImageCoords() {
    try {
      // Performs text detection on the local file
      const request = {
        image: {content: fs.readFileSync(fileName)},
      };
      
      const [result] = await client.objectLocalization(request);
      const objects = result.localizedObjectAnnotations;
      objects.forEach(object => {
        console.log(`Name: ${object.name}`);
        console.log(`Confidence: ${object.score}`);
        const vertices = object.boundingPoly.normalizedVertices;
        vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
      });
    } catch (error) {
      console.error("Error:", error);
    }
}

//   scanImage();
scanImageCoords();