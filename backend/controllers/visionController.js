const vision = require('@google-cloud/vision');

// Initialize client
const client = new vision.ImageAnnotatorClient({
  keyFilename: './service-account-key.json'  // Path to your service account JSON
});

const fs = require('fs');
const path = require('path');
const Check = require('../model/check'); // adjust path
const baseUrl = 'http://206.189.130.102:5000'; // or your server domain

// exports.scanCheck = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No image uploaded' });
//     }

//     const imageBuffer = req.file.buffer;

//     // OCR using Google Vision API
//     const [result] = await client.textDetection({
//       image: { content: imageBuffer }
//     });

//     const detections = result.textAnnotations;
//     const extractedText = detections.length > 0 ? detections[0].description : '';

//     res.json({ extractedText });
//   } catch (error) {
//     console.error('Error scanning check:', error);
//     res.status(500).json({ error: 'Failed to process image' });
//   }
// };


// exports.scanCheck = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No image uploaded' });
//     }

//     const imageBuffer = req.file.buffer;

//     // OCR using Google Vision API
//     const [result] = await client.textDetection({
//       image: { content: imageBuffer }
//     });

//     const detections = result.textAnnotations;
//     const extractedText = detections.length > 0 ? detections[0].description : '';

//     // Parse fields strictly from extractedText (no dummy defaults)
//     const dateMatch = extractedText.match(/DATE[:\s]*([A-Za-z]+\.*\s\d{1,2},\s\d{4})/);
//     const amountMatch = extractedText.match(/\$?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/);
//     const companyMatch = extractedText.match(/ALL\s+(.*?)\s+BRANCHES/i);
//     const checkTypeMatch = extractedText.match(/MEMO\s+(.*)/i);
//     const nameMatch = extractedText.match(/^[A-Z][a-z]+\s[A-Z][a-z]+/m); // First proper name in the text

//     const responseData = {
//       customerName: nameMatch ? nameMatch[0] : '',
//       licenseNo: '', // Not extracted from check
//       date: dateMatch ? dateMatch[1] : '',
//       company: companyMatch ? companyMatch[1].trim() : '',
//       checkType: checkTypeMatch ? checkTypeMatch[1].trim() : '',
//       amount: amountMatch ? amountMatch[1].replace(',', '.').trim() : ''
//     };

//     res.json(responseData);
//   } catch (error) {
//     console.error('Error scanning check:', error);
//     res.status(500).json({ error: 'Failed to process image' });
//   }
// };


exports.scanCheck = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    // Save image to disk
    const filename = `${Date.now()}-${req.file.originalname}`;
    const filepath = path.join(__dirname, '..', 'upload', filename);
    fs.writeFileSync(filepath, req.file.buffer);

    const imageUrl = `${baseUrl}/upload/${filename}`;

    // OCR
    const [result] = await client.textDetection({
      image: { content: req.file.buffer }
    });

    const extractedText = result.textAnnotations?.[0]?.description || '';

    // Extract fields
    const dateMatch = extractedText.match(/DATE[:\s]*([A-Za-z]+\.*\s\d{1,2},\s\d{4})/);
    const amountMatch = extractedText.match(/\$?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/);
    const companyMatch = extractedText.match(/ALL\s+(.*?)\s+BRANCHES/i);
    const checkTypeMatch = extractedText.match(/MEMO\s+(.*)/i);
    const nameMatch = extractedText.match(/^[A-Z][a-z]+\s[A-Z][a-z]+/m);

    const parsedData = {
      imageUrl,
      customerName: nameMatch?.[0] || '',
      licenseNo: '',
      date: dateMatch?.[1] || '',
      company: companyMatch?.[1]?.trim() || '',
      checkType: checkTypeMatch?.[1]?.trim() || '',
      amount: amountMatch?.[1]?.replace(',', '.') || ''
    };

    const savedCheck = await Check.create(parsedData);
    res.json(savedCheck);

  } catch (error) {
    console.error('Error scanning check:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
};