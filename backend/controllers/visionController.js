const vision = require('@google-cloud/vision');

// Initialize client
const client = new vision.ImageAnnotatorClient({
  keyFilename: './service-account-key.json'
});


const fs = require('fs');
const path = require('path');
const Check = require('../model/check.model');
const baseUrl = 'http://206.189.130.102:5000';
//const baseUrl = 'http://137.184.217.34:5000'


exports.scanCheck = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    // Save uploaded image
    const filename = `${Date.now()}-${req.file.originalname}`;
    const filepath = path.join(__dirname, '..', 'upload', filename);
    fs.writeFileSync(filepath, req.file.buffer);
    const imageUrl = `${baseUrl}/upload/${filename}`;

    // Use DOCUMENT_TEXT_DETECTION instead of TEXT_DETECTION
    const [result] = await client.documentTextDetection({
      image: { content: req.file.buffer },
    });





    const extractedText = result.fullTextAnnotation?.text || '';
    if (!extractedText) {
      return res.status(400).json({ error: 'No text extracted from image' });
    }

    // Try searching for more flexible payee patterns that may vary in wording, punctuation, or capitalization
    const payeePatterns = [
      /pay to the order of\s+([A-Za-z0-9\s,.'-]+)/i,
      /payee:\s+([A-Za-z0-9\s,.'-]+)/i,
      /order of\s+([A-Za-z0-9\s,.'-]+)/i,
      /([A-Za-z0-9\s,.'-]+)\s+payee/i,  // Reverse order for testing
    ];

    // Try to find any payee name using the variations
    let payeeText = '';
    for (let pattern of payeePatterns) {
      const match = extractedText.match(pattern);
      if (match) {
        payeeText = match[1].trim();
        break;
      }
    }

    // if (!payeeText) {
    //   return res.status(400).json({ error: 'Payee not found in the text' });
    // }


    // Now, process the extracted name
    let customerName = payeeText || 'Unknown Customer';

    // Remove unwanted address info if present
    customerName = customerName.replace(/P\.?O\.? BOX[\w\s\-\.]+/, '').trim();


    // Split into first, middle, and last names
    const nameParts = customerName.split(' ');
    const customerFirstName = nameParts[0] || '';
    const customerMiddleName = nameParts.length > 1 ? nameParts.slice(1, nameParts.length - 1).join(' ') : '';
    const customerLastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';





    // === Amount Numeric ===
    const amountMatch = extractedText.match(/\$\s?(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2}))/);
    const amountNumeric = amountMatch ? amountMatch[1].replace(',', '') : '';

    // === Amount in Words ===
    const amountWordsMatch = extractedText.match(/([A-Z\s\-]+)\s+DOLLARS/i);
    const amountWords = amountWordsMatch ? amountWordsMatch[1].trim() + ' DOLLARS' : '';

    // === Date ===
    const dateMatch = extractedText.match(/(?:DATE|Dated)[:\s]*([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4})/i) ||
      extractedText.match(/([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4})/);
    const date = dateMatch ? dateMatch[1] : '';

    const parsedData = {
      imageUrl,
      customerName:customerFirstName,
      customerFirstName,
      customerMiddleName,
      customerLastName,
      amountNumeric,
      amountWords,
      date,
      payee: '',
      memo: '',
      company: '',
      checkType:'',
      extractedText,
    };

   

    res.json(parsedData);
  } catch (error) {
    console.error('Error during scan:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
};






// exports.scanLicense = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No image uploaded' });
//     }

//     const filename = `${Date.now()}-${req.file.originalname}`;
//     const filepath = path.join(__dirname, '..', 'upload', filename);
//     fs.writeFileSync(filepath, req.file.buffer);
//     const imageUrl = `${baseUrl}/upload/${filename}`;

//     // OCR using Google Vision API
//     const [result] = await client.textDetection({
//       image: { content: req.file.buffer },
//     });

//     const extractedText = result.textAnnotations?.[0]?.description || '';


//     // Better regex patterns
//     const nameMatch = extractedText.match(/(?:1\s+)?SAMPLE\s+([A-Z]+\s+[A-Z]+)/i);
//     const licenseNoMatch = extractedText.match(/(?:DL\s*No\.?|DL\s*#|License\s*Number|Driver(?:'s)?\s*License\s*Number|DMV\s*ID\s*Number|DLN|License\s*No\.?)[:\s]*([\dA-Z\s]+)/i);

//     const classMatch = extractedText.match(/CLASS[:\s]+([A-Z]+)/i);
//     const dobMatch = extractedText.match(/DOB[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
//     const sexMatch = extractedText.match(/SEX[:\s]+([MF])/i);
//     const eyesMatch = extractedText.match(/EYES[:\s]+([A-Z]+)/i);
//     const heightMatch = extractedText.match(/(?:HT|HGT)[:\s]+([\d\-\'"]+)/i);
//     const issuedMatch = extractedText.match(/(?:ISSUED|ISS)[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
//     const expiresMatch = extractedText.match(/(?:EXPIRES|EXP)[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
//     const addressMatch = extractedText.match(/(?:\d+\s+[A-Z\s]+(?:APT\.?\s*\d*)?,?\s+[A-Z\s]+,\s+[A-Z]{2}\s+\d{5})/i);

//     const parsedLicense = {
//       imageUrl,
//       name: nameMatch?.[1]?.trim() || '',
//       licenseNo: licenseNoMatch?.[1]?.replace(/\s+/g, '').trim() || '',
//       class: classMatch?.[1] || '',
//       dob: dobMatch?.[1] || '',
//       sex: sexMatch?.[1] || '',
//       eyes: eyesMatch?.[1] || '',
//       height: heightMatch?.[1] || '',
//       address: addressMatch?.[0] || '',
//       issuedDate: issuedMatch?.[1] || '',
//       expiryDate: expiresMatch?.[1] || ''
//     };

//     res.json(parsedLicense);

//   } catch (error) {
//     console.error('Error scanning license:', error);
//     res.status(500).json({ error: 'Failed to process license image' });
//   }
// };

exports.scanLicense = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const filename = `${Date.now()}-${req.file.originalname}`;
    const filepath = path.join(__dirname, '..', 'upload', filename);
    fs.writeFileSync(filepath, req.file.buffer);
    const imageUrl = `${baseUrl}/upload/${filename}`;

    // OCR using Google Vision API
    const [result] = await client.textDetection({
      image: { content: req.file.buffer },
    });

    const extractedText = result.textAnnotations?.[0]?.description || '';
    console.log('Extracted Text:', extractedText);

    // Regex patterns for data fields
    const nameMatch = extractedText.match(/(?:1\s+)?SAMPLE\s+([A-Z]+\s+[A-Z]+)/i);

    const licensePatterns = [
      /DL\s*No\.?:?\s*([\dA-Z\-]+)/i,
      /License\s*No\.?:?\s*([\dA-Z\-]+)/i,
      /DL\s*#\s*([\dA-Z\-]+)/i,
      /Driver(?:'s)?\s*License\s*Number[:\s]*([\dA-Z\-]+)/i,
      /DMV\s*ID\s*Number[:\s]*([\dA-Z\-]+)/i,
      /DLN[:\s]*([\dA-Z\-]+)/i
    ];

    let licenseNo = '';
    for (let pattern of licensePatterns) {
      const match = extractedText.match(pattern);
      if (match) {
        licenseNo = match[1].replace(/\s+/g, '').trim();
        break;
      }
    }

    const classMatch = extractedText.match(/CLASS[:\s]+([A-Z]+)/i);
    const dobMatch = extractedText.match(/DOB[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
    const sexMatch = extractedText.match(/SEX[:\s]+([MF])/i);
    const eyesMatch = extractedText.match(/EYES[:\s]+([A-Z]+)/i);
    const heightMatch = extractedText.match(/(?:HT|HGT)[:\s]+([\d\-\'"]+)/i);
    const issuedMatch = extractedText.match(/(?:ISSUED|ISS)[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
    const expiresMatch = extractedText.match(/(?:EXPIRES|EXP)[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
    const addressMatch = extractedText.match(/(?:\d+\s+[A-Z0-9\s]+(?:APT\.?\s*\d*)?,?\s+[A-Z\s]+,\s+[A-Z]{2}\s+\d{5})/i);

    const parsedLicense = {
      imageUrl,
      name: nameMatch?.[1]?.trim() || '',
      licenseNo: licenseNo || '',
      class: classMatch?.[1] || '',
      dob: dobMatch?.[1] || '',
      sex: sexMatch?.[1] || '',
      eyes: eyesMatch?.[1] || '',
      height: heightMatch?.[1] || '',
      address: addressMatch?.[0] || '',
      issuedDate: issuedMatch?.[1] || '',
      expiryDate: expiresMatch?.[1] || ''
    };

    res.json(parsedLicense);

  } catch (error) {
    console.error('Error scanning license:', error);
    res.status(500).json({ error: 'Failed to process license image' });
  }
};


exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image uploaded' });
    }

    const filename = `${Date.now()}-${req.file.originalname}`;
    const filepath = path.join(__dirname, '..', 'upload', filename);

    // Save image to disk
    fs.writeFileSync(filepath, req.file.buffer);

    // Construct image URL (you can use process.env.MAIN_URL if set)
    const imageUrl = `${req.protocol}://${req.get('host')}/upload/${filename}`;

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        filename,
        imageUrl
      }
    });

  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ success: false, message: 'Failed to upload image' });
  }
};






