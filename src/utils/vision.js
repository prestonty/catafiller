const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

console.log("HELLO");
/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = './public/healthCards/healthCard1.jpg';

async function someFunction() {
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

  someFunction();
  console.log("ASD");