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

async function scanForImageCoords() {
    try {
        const cv = require('opencv4nodejs');

        // Load the main image
        const mainImagePath = './public/randompics/downloajhnjvewqiufobvewquhifebw.png';
        const mainImage = cv.imread(mainImagePath);
        
        // Load the template image (the image you want to find within the main image)
        const templateImagePath = './public/randompics/image432.png';
        const templateImage = cv.imread(templateImagePath);
        
        // Match the template image within the main image
        const matched = mainImage.matchTemplate(templateImage, 5);
        
        // Get the location of the best match
        const { maxLoc } = matched.minMaxLoc();
        
        // Display the result
        mainImage.drawRectangle(
          new cv.Rect(maxLoc.x, maxLoc.y, templateImage.cols, templateImage.rows),
          new cv.Vec(0, 255, 0), // Green color
        );
        cv.imshowWait('Result', mainImage);
    } catch (error) {
      console.error("Error:", error);
    }
}


async function scanForImageCoords() {
    try {
        const cv = require('opencv4nodejs');

        // Load the main image
        const mainImagePath = './public/randompics/downloajhnjvewqiufobvewquhifebw.png';
        const mainImage = cv.imread(mainImagePath);
        
        // Load the template image (the image you want to find within the main image)
        const templateImagePath = './public/randompics/image432.png';
        const templateImage = cv.imread(templateImagePath);
        
        // Match the template image within the main image
        const matched = mainImage.matchTemplate(templateImage, 5);
        
        // Get the location of the best match
        const { maxLoc } = matched.minMaxLoc();
        
        // Display the result
        mainImage.drawRectangle(
          new cv.Rect(maxLoc.x, maxLoc.y, templateImage.cols, templateImage.rows),
          new cv.Vec(0, 255, 0), // Green color
        );
        cv.imshowWait('Result', mainImage);
    } catch (error) {
      console.error("Error:", error);
    }
}

async function bmp(path) {
  var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
  var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;
  
  // Configure API key authorization: Apikey
  var Apikey = defaultClient.authentications['Apikey'];
  Apikey.apiKey = '821a1b32-fbf2-4d18-91cb-11cd0c20bebb';
  
  
  
  var apiInstance = new CloudmersiveImageApiClient.ConvertApi();
  
  var imageFile = Buffer.from(fs.readFileSync(path).buffer); // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
  
  
  var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + data);
    }
  };
  apiInstance.convertToBmp(imageFile, callback);


}


bmp('./public/randompics/downloajhnjvewqiufobvewquhifebw.png');
//   scanImage();
// scanImageCoords();

scanImage();
// scanImageCoords();
// scanForImageCoords();