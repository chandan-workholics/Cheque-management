const vision = require('@google-cloud/vision');

// Initialize client
const client = new vision.ImageAnnotatorClient({
  keyFilename: './service-account-key.json'  // Path to your service account JSON
});

exports.scanCheck = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const imageBuffer = req.file.buffer;

    // OCR using Google Vision API
    const [result] = await client.textDetection({
      image: { content: imageBuffer }
    });

    const detections = result.textAnnotations;
    const extractedText = detections.length > 0 ? detections[0].description : '';

    res.json({ extractedText });
  } catch (error) {
    console.error('Error scanning check:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
};
