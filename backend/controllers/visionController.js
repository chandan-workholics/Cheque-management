const vision = require('@google-cloud/vision');

// Initialize client
const client = new vision.ImageAnnotatorClient({
  keyFilename: './service-account-key.json'  // Path to your service account JSON
});

const fs = require('fs');
const path = require('path');
const Check = require('../model/check.model'); // adjust path
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


// exports.scanCheck = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No image uploaded' });
//     }

//     // Save image to disk
//     const filename = `${Date.now()}-${req.file.originalname}`;
//     const filepath = path.join(__dirname, '..', 'upload', filename);
//     fs.writeFileSync(filepath, req.file.buffer);

//     const imageUrl = `${baseUrl}/upload/${filename}`;

//     // OCR
//     const [result] = await client.textDetection({
//       image: { content: req.file.buffer }
//     });

//     const extractedText = result.textAnnotations?.[0]?.description || '';

//     // Extract fields
//     const dateMatch = extractedText.match(/DATE[:\s]*([A-Za-z]+\.*\s\d{1,2},\s\d{4})/);
//     const amountMatch = extractedText.match(/\$?\s*(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/);
//     const companyMatch = extractedText.match(/ALL\s+(.*?)\s+BRANCHES/i);
//     const checkTypeMatch = extractedText.match(/MEMO\s+(.*)/i);
//     const nameMatch = extractedText.match(/^[A-Z][a-z]+\s[A-Z][a-z]+/m);

//     const parsedData = {
//       imageUrl,
//       customerName: nameMatch?.[0] || '',
//       licenseNo: '',
//       date: dateMatch?.[1] || '',
//       company: companyMatch?.[1]?.trim() || '',
//       checkType: checkTypeMatch?.[1]?.trim() || '',
//       amount: amountMatch?.[1]?.replace(',', '.') || ''
//     };

//     // const savedCheck = await Check.create(parsedData);
//     // res.json(savedCheck);
//     res.json(parsedData);

//   } catch (error) {
//     console.error('Error scanning check:', error);
//     res.status(500).json({ error: 'Failed to process image' });
//   }
// };



exports.scanCheck = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    const filename = `${Date.now()}-${req.file.originalname}`;
    const filepath = path.join(__dirname, '..', 'upload', filename);
    fs.writeFileSync(filepath, req.file.buffer);
    const imageUrl = `${baseUrl}/upload/${filename}`;

    const [result] = await client.textDetection({
      image: { content: req.file.buffer },
    });

    const extractedText = result.textAnnotations?.[0]?.description || '';

    const lines = extractedText.split('\n');

    // Helper to get value after a label
    const getValueAfterLabel = (label) => {
      const idx = lines.findIndex(line => line.toUpperCase().includes(label.toUpperCase()));
      return idx >= 0 && idx + 1 < lines.length ? lines[idx + 1].trim() : '';
    };

    const date = lines.find(line =>
      line.match(/\b(?:\d{1,2}[\/\-\.]){2}\d{2,4}\b/) ||  // e.g., 12/25/2024
      line.match(/\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\b\s+\d{1,2},?\s+\d{4}/i) // e.g., July 4, 2024
    ) || '';

    const amountNumericMatch = extractedText.match(/\$?\d{1,3}(,\d{3})*(\.\d{2})?|\$?\d+(\.\d{2})?/);
    let amountNumeric = amountNumericMatch ? amountNumericMatch[0].replace('$', '').trim() : '';
    // Convert 715,39 to 715.39 if comma is used as decimal
    if (amountNumeric.includes(',') && !amountNumeric.includes('.')) {
      amountNumeric = amountNumeric.replace(',', '.');
    }



    const amountWords = lines.find(line =>
      line.match(/\b(?:One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Thirteen|Fifteen|Twenty|Hundred|Thousand|Million|DOLLARS)\b/i)
    ) || '';

    const payeeLine = lines.find(line => line.toUpperCase().includes("PAY TO THE ORDER OF"));
    const payee = payeeLine ? getValueAfterLabel("PAY TO THE ORDER OF") : '';

    const memoLine = lines.find(line => line.toUpperCase().includes("MEMO"));
    const memo = memoLine ? memoLine.replace(/MEMO[:\s]*/i, '').trim() : '';

    const customerName = lines.find(line => /^[A-Z][a-z]+\s[A-Z][a-z]+$/.test(line)) || '';

    const company = lines.find(line => /USA|CORP|INC|LLC|BANK|FINANCE|CORPORATION|BRANCHES/i.test(line)) || '';



    const parsedData = {
      imageUrl,
      customerName,
      date: date.trim(),
      amountNumeric: amountNumeric.trim(),
      amountWords: amountWords.trim(),
      payee: payee.trim(),
      memo,
      company: company.trim(),
      extractedText
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
//       image: { content: req.file.buffer }
//     });

//     const extractedText = result.textAnnotations?.[0]?.description || '';

//     // Extract fields using regex
//     const nameMatch = extractedText.match(/DOCUMENT\s+([A-Z]+,\s[A-Z]+)/i);
//     const licenseNoMatch = extractedText.match(/ID:\s*([\d\s]+)/i);
//     const classMatch = extractedText.match(/CLASS\s([A-Z]+)/i);
//     const dobMatch = extractedText.match(/DOB:\s*(\d{2}-\d{2}-\d{2})/i);
//     const sexMatch = extractedText.match(/SEX:\s*([MF])/i);
//     const eyesMatch = extractedText.match(/EYES:\s*([A-Z]+)/i);
//     const heightMatch = extractedText.match(/HT:\s*([\d\-]+)/i);
//     const addressMatch = extractedText.match(/DOCUMENT\s+[A-Z]+,\s[A-Z]+\n(.+?)\n/i);
//     const issuedMatch = extractedText.match(/ISSUED:\s*(\d{2}-\d{2}-\d{2})/i);
//     const expiresMatch = extractedText.match(/EXPIRES:\s*(\d{2}-\d{2}-\d{2})/i);

//     const parsedLicense = {
//       imageUrl,
//       name: nameMatch?.[1] || '',
//       licenseNo: licenseNoMatch?.[1].replace(/\s+/g, '') || '',
//       class: classMatch?.[1] || '',
//       dob: dobMatch?.[1] || '',
//       sex: sexMatch?.[1] || '',
//       eyes: eyesMatch?.[1] || '',
//       height: heightMatch?.[1] || '',
//       address: addressMatch?.[1] || '',
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


    // Better regex patterns
    const nameMatch = extractedText.match(/(?:1\s+)?SAMPLE\s+([A-Z]+\s+[A-Z]+)/i);
    const licenseNoMatch = extractedText.match(/(?:LIC|DLN)[:\s]+([\d\s]+)/i);
    const classMatch = extractedText.match(/CLASS[:\s]+([A-Z]+)/i);
    const dobMatch = extractedText.match(/DOB[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
    const sexMatch = extractedText.match(/SEX[:\s]+([MF])/i);
    const eyesMatch = extractedText.match(/EYES[:\s]+([A-Z]+)/i);
    const heightMatch = extractedText.match(/(?:HT|HGT)[:\s]+([\d\-\'"]+)/i);
    const issuedMatch = extractedText.match(/(?:ISSUED|ISS)[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
    const expiresMatch = extractedText.match(/(?:EXPIRES|EXP)[:\s]+(\d{2}\/\d{2}\/\d{4})/i);
    const addressMatch = extractedText.match(/(?:\d+\s+[A-Z\s]+(?:APT\.?\s*\d*)?,?\s+[A-Z\s]+,\s+[A-Z]{2}\s+\d{5})/i);

    const parsedLicense = {
      imageUrl,
      name: nameMatch?.[1]?.trim() || '',
      licenseNo: licenseNoMatch?.[1]?.replace(/\s+/g, '') || '',
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
