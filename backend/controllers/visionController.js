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
<<<<<<< HEAD
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }
    // Save image locally
=======
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    // Save uploaded image
>>>>>>> 07cc05ec7a5cd8aed0b38f0cf4d26bf96df99bcc
    const filename = `${Date.now()}-${req.file.originalname}`;
    const filepath = path.join(__dirname, '..', 'upload', filename);
    fs.writeFileSync(filepath, req.file.buffer);
    const imageUrl = `${baseUrl}/upload/${filename}`;
<<<<<<< HEAD
    // OCR detection
    const [result] = await client.documentTextDetection({
      image: { content: req.file.buffer },
    });
=======

    // Use DOCUMENT_TEXT_DETECTION instead of TEXT_DETECTION
    const [result] = await client.documentTextDetection({
      image: { content: req.file.buffer },
    });


>>>>>>> 07cc05ec7a5cd8aed0b38f0cf4d26bf96df99bcc
    const extractedText = result.fullTextAnnotation?.text || '';
    if (!extractedText) {
      return res.status(400).json({ error: 'No text extracted from image' });
    }
<<<<<<< HEAD
    const cleanText = extractedText.replace(/\r\n/g, '\n').trim();
    const lines = cleanText.split('\n').map(l => l.trim()).filter(Boolean);
    // === PAYEE NAME Extraction ===
    let customerName = '';
    const blacklist = [
      'INC', 'LLC', 'BANK', 'VOID', 'MEMO', 'CHECK', 'BOX', 'DOCUMENT',
      'CHEMICALLY', 'REACTIVE', 'STOCK', 'NURSERY', 'SIGNATURE', 'DOLLARS',
      'WARNING', 'PEACHES', 'GRAPES', 'APPLES', 'TEXAS', 'SHADE', 'TREES',
      'FIGS', 'PLUMS', 'WALNUTS', 'PEARS'
    ];
    const payeeIndex = lines.findIndex(line =>
      /pay\s*to\s*the\s*order\s*of/i.test(line)
    );
    if (payeeIndex !== -1) {
      for (let i = payeeIndex + 1; i <= payeeIndex + 6 && i < lines.length; i++) {
        const line = lines[i].trim();
        const isValidName = /^[A-Z][a-zA-Z]+(?: [A-Z][a-zA-Z]+)*$/.test(line);
        const isBlacklisted = blacklist.some(word => line.toUpperCase().includes(word));
        if (isValidName && !isBlacklisted) {
          customerName = line;
          break;
        }
      }
    }
    // Fallback using regex patterns
    if (!customerName) {
      const payeePatterns = [
  // Common format: "Pay to the Order of John Doe"
  /pay to the order of\s*[:\-]?\s*([A-Z][a-zA-Z&]+\s+[A-Z][a-zA-Z&]+(?:\s+[A-Z][a-zA-Z&]+)*)/i,

  // Alternate label: "Payee: John Doe"
  /payee\s*[:\-]?\s*([A-Z][a-zA-Z&]+\s+[A-Z][a-zA-Z&]+(?:\s+[A-Z][a-zA-Z&]+)*)/i,

  // Handles split or misrecognized lines for "to the order of"
  /to\s+the\s+order\s+of\s+([A-Z][a-zA-Z&]+\s+[A-Z][a-zA-Z&]+(?:\s+[A-Z][a-zA-Z&]+)*)/i,

  // All caps payee name followed by DOLLARS (e.g. "SOCORRO PONCE\n***DOLLARS")
  /([A-Z\s,.'-]{3,})\s*\n?.*DOLLARS/i,

  // Fallback: Line with two or more capitalized words (name-like)
  /^([A-Z][a-zA-Z&]+\s+[A-Z][a-zA-Z&]+(?:\s+[A-Z][a-zA-Z&]+)*)$/m
];

      for (const pattern of payeePatterns) {
        const match = cleanText.match(pattern);
        if (match && match[1]) {
          const candidate = match[1].replace(/\n/g, ' ').trim();
          const isValid = candidate.length >= 3 &&
            /^[A-Za-z ,.'-]+$/.test(candidate) &&
            !blacklist.some(word => candidate.toUpperCase().includes(word));
          if (isValid) {
            customerName = candidate;
            break;
          }
        }
=======

    const payeePatterns = [
      /Pay\s+to\s+the\s+order\s+of\s+([\w\s\.\-&']+)/i,
      /TO\s+THE\s+ORDER\s+OF:?\s+[\s\S]*?\n([\w\s\.\-&']+)/i,
      /Order\s+Of:?\s+Amount:\s+([\w\s\.\-&']+)/i,
      /TO\s+THE\s+ORDER\s*\n([\w\s\.\-&']+)\nOF/i,
      /Order\s+Of:\s+([\w\s\.\-&']+)/i,
      /\n([A-Z][\w\s\.\-&']{2,})\nTO\s+THE\s+ORDER/i
    ];


    // Try to find any payee name using the variations
    let payeeText = '';
    for (let pattern of payeePatterns) {
      const match = extractedText.match(pattern);
      if (match) {
        payeeText = match[1].trim();
        break;
>>>>>>> 07cc05ec7a5cd8aed0b38f0cf4d26bf96df99bcc
      }
    }

    let customerName = payeeText || 'Unknown Customer';

    customerName = customerName.replace(/P\.?O\.? BOX[\w\s\-\.]+/, '').trim();

    const lines = customerName.split('\n').map(line => line.trim()).filter(line => line);

    const fullNameLine = lines[0] || '';

    const nameParts = fullNameLine.split(' ').filter(part => part);

    const customerFirstName = nameParts[0] || '';
    const customerLastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
<<<<<<< HEAD
    const customerMiddleName = nameParts.length > 2 ? nameParts.slice(1, -1).join(' ') : '';

    // === Amount (Numeric) Extraction ===
    let amountNumeric = '';
    const amountRegex = /\$+\s*([0-9,]+\.\d{2})/;
    for (const line of lines) {
      const match = line.match(amountRegex);
      if (match) {
        const num = match[1].replace(/,/g, '');
        if (!isNaN(num)) {
          amountNumeric = num;
          break;
        }
      }
    }

    if (!amountNumeric) {
      const fallbackLine = lines.find(line => /DOLLARS/i.test(line) && /\d/.test(line));
      const match = fallbackLine?.match(/(\d{1,3}(?:,\d{3})*(?:\.\d{2}))/);
      if (match) {
        amountNumeric = match[1].replace(/,/g, '');
      }
    }

    // === Amount in Words ===
    let amountWords = '';
    for (const line of lines) {
      if (/([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\s+and\s+\d{1,2}\/100)/i.test(line)) {
        amountWords = line.replace(/[*]+$/, '').trim();
        break;
      }
    }
=======
    const customerMiddleName = nameParts.length > 2
      ? nameParts.slice(1, nameParts.length - 1).join(' ')
      : '';

    // === Amount Numeric ===
    const amountMatch = extractedText.match(/\$\s?(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2}))/);
    const amountNumeric = amountMatch ? amountMatch[1].replace(',', '') : '';

    // === Amount in Words ===
    const amountWordsMatch = extractedText.match(/([A-Z\s\-]+)\s+DOLLARS/i);
    const amountWords = amountWordsMatch ? amountWordsMatch[1].trim() + ' DOLLARS' : '';
>>>>>>> 07cc05ec7a5cd8aed0b38f0cf4d26bf96df99bcc

    // === Date ===
    const dateMatch = extractedText.match(/(?:DATE|Dated)[:\s]*([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4})/i) ||
      extractedText.match(/([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4})/);
    const date = dateMatch ? dateMatch[1] : '';

<<<<<<< HEAD
    // === Final structured response ===
=======
>>>>>>> 07cc05ec7a5cd8aed0b38f0cf4d26bf96df99bcc
    const parsedData = {
      imageUrl,
      customerName: customerName,
      customerFirstName,
      customerMiddleName,
      customerLastName,
      amountNumeric,
      amountWords,
      date,
      payee: '',
      memo: '',
      company: '',
      checkType: '',
      extractedText,
    };

    res.json(parsedData);
  } catch (error) {
    console.error('Error during scan:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
};


<<<<<<< HEAD
=======


>>>>>>> 07cc05ec7a5cd8aed0b38f0cf4d26bf96df99bcc
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





