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


// exports.scanCheck = async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

//     // Save uploaded image
//     const filename = `${Date.now()}-${req.file.originalname}`;
//     const filepath = path.join(__dirname, '..', 'upload', filename);
//     fs.writeFileSync(filepath, req.file.buffer);
//     const imageUrl = `${baseUrl}/upload/${filename}`;

//     // Use DOCUMENT_TEXT_DETECTION instead of TEXT_DETECTION
//     const [result] = await client.documentTextDetection({
//       image: { content: req.file.buffer },
//     });


//     const extractedText = result.fullTextAnnotation?.text || '';
//     if (!extractedText) {
//       return res.status(400).json({ error: 'No text extracted from image' });
//     }

//     // Try searching for more flexible payee patterns that may vary in wording, punctuation, or capitalization
//     // const payeePatterns = [
//     //   /pay to the order of\s+([A-Za-z0-9\s,.'-]+)/i,
//     //   /payee:\s+([A-Za-z0-9\s,.'-]+)/i,
//     //   /order of\s+([A-Za-z0-9\s,.'-]+)/i,
//     //   /([A-Za-z0-9\s,.'-]+)\s+payee/i,  // Reverse order for testing
//     // ];

//     // const payeePatterns = [
//     //   /pay\s*\n*\s*to\s*\n*\s*the\s*\n*\s*order\s*\n*\s*of\s*([\s\S]{1,100}?)(?:\n|$)/i,
//     //   /payee\s*[:\-]?\s*([\s\S]{1,100}?)(?:\n|$)/i,
//     //   /order\s*of\s*([\s\S]{1,100}?)(?:\n|$)/i,
//     //   /([\s\S]{1,100}?)\s+payee/i,
//     // ];


//     // const payeePatterns = [
//     //   /pay to the order of\s+([A-Za-z\s,.'-]+)/i,
//     //   /payee:\s+([A-Za-z\s,.'-]+)/i,
//     //   /order of\s+([A-Za-z\s,.'-]+)/i,
//     //   /([A-Za-z\s,.'-]+)\s+payee/i,  // Reverse order for testing

//     //   /pay\s*\n*\s*to\s*\n*\s*the\s*\n*\s*order\s*\n*\s*of\s*([\s\S]{1,100}?)(?:\n|$)/i,
//     //   /payee\s*[:\-]?\s*([\s\S]{1,100}?)(?:\n|$)/i,
//     //   /order\s*of\s*([\s\S]{1,100}?)(?:\n|$)/i,
//     //   /([\s\S]{1,100}?)\s+payee/i,

//     //   /PAY\s*\n*\s*TO\s*\n*\s*THE\s*\n*\s*ORDER\s*\n*\s*OF\s*([\s\S]{1,100}?)/i,  // Added pattern
//     //   /TO\s*\n*\s*THE\s*\n*\s*ORDER\s*\n*\s*OF\s*:\s*([\s\S]{1,100}?)/i,  // Added pattern

//     //   // Adjusted pattern to capture name properly (letters and spaces only) between "TO THE" and "ORDER"
//     //   /TO\s*\n*\s*THE\s*\n*([A-Za-z\s]+)\s*ORDER/i,  // Captures only letters and spaces for the name

//     //   // Added specific pattern to capture address part after "OF"
//     //   /ORDER\s*\n*\s*([\d\w\s]+)\s*\n*OF\s*([\s\S]{1,100})/i, // Captures numeric address properly
//     // ];


//     // const payeePatterns = [
//     //   /pay\s*\n*\s*to\s*\n*\s*the\s*\n*\s*order\s*\n*\s*of:\s*([\s\S]{1,100}?)(?:\n|$)/i,  // NEW multiline variant

//     //   /pay to the order of\s+([A-Za-z\s,.'-]+)/i,
//     //   /payee:\s+([A-Za-z\s,.'-]+)/i,
//     //   /order of\s+([A-Za-z\s,.'-]+)/i,
//     //   /([A-Za-z\s,.'-]+)\s+payee/i,

//     //   /pay\s*\n*\s*to\s*\n*\s*the\s*\n*\s*order\s*\n*\s*of\s*([\s\S]{1,100}?)(?:\n|$)/i,
//     //   /payee\s*[:\-]?\s*([\s\S]{1,100}?)(?:\n|$)/i,
//     //   /order\s*of\s*([\s\S]{1,100}?)(?:\n|$)/i,
//     //   /([\s\S]{1,100}?)\s+payee/i,

//     //   /PAY\s*\n*\s*TO\s*\n*\s*THE\s*\n*\s*ORDER\s*\n*\s*OF\s*([\s\S]{1,100}?)/i,
//     //   /TO\s*\n*\s*THE\s*\n*\s*ORDER\s*\n*\s*OF\s*:\s*([\s\S]{1,100}?)/i,

//     //   /TO\s*\n*\s*THE\s*\n*([A-Za-z\s]+)\s*ORDER/i,

//     //   /ORDER\s*\n*\s*([\d\w\s]+)\s*\n*OF\s*([\s\S]{1,100})/i
//     // ];


//     const payeePatterns = [
//       /pay\s*\n*\s*to\s*\n*\s*the\s*\n*\s*order\s*\n*\s*of:\s*([\s\S]{1,100}?)(?:\n|$)/i,

//       /pay to the order of\s+([A-Za-z\s,.'-]+)/i,
//       /payee:\s+([A-Za-z\s,.'-]+)/i,
//       /order of\s+([A-Za-z\s,.'-]+)/i,
//       /([A-Za-z\s,.'-]+)\s+payee/i,

//       /pay\s*\n*\s*to\s*\n*\s*the\s*\n*\s*order\s*\n*\s*of\s*([\s\S]{1,100}?)(?:\n|$)/i,
//       /payee\s*[:\-]?\s*([\s\S]{1,100}?)(?:\n|$)/i,
//       /order\s*of\s*([\s\S]{1,100}?)(?:\n|$)/i,
//       /([\s\S]{1,100}?)\s+payee/i,

//       /PAY\s*\n*\s*TO\s*\n*\s*THE\s*\n*\s*ORDER\s*\n*\s*OF\s*([\s\S]{1,100}?)/i,
//       /TO\s*\n*\s*THE\s*\n*\s*ORDER\s*\n*\s*OF\s*:\s*([\s\S]{1,100}?)/i,

//       /TO\s*\n*\s*THE\s*\n*([A-Za-z\s]+)\s*ORDER/i,

//       /ORDER\s*\n*\s*([\d\w\s]+)\s*\n*OF\s*([\s\S]{1,100})/i,

//       /to\s+the\s+([A-Za-z\s.'-]{1,100})/i,                   // NEW: Same-line "To The <name>"
//       /to\s+the\s*\n\s*([A-Za-z\s.'-]{1,100})/i               // NEW: Multiline "To The\n<name>"
//     ];




//     // Try to find any payee name using the variations
//     let payeeText = '';
//     for (let pattern of payeePatterns) {
//       const match = extractedText.match(pattern);
//       if (match) {
//         payeeText = match[1].trim();
//         break;
//       }
//     }


//     // Now, process the extracted name
//     let customerName = payeeText || 'Unknown Customer';

//     // Remove unwanted address info if present
//     customerName = customerName.replace(/P\.?O\.? BOX[\w\s\-\.]+/, '').trim();


//     // Split into first, middle, and last names

//     // Split by line, filter out empty lines
//     const lines = customerName.split('\n').map(line => line.trim()).filter(line => line);

//     // Assume the first line is the actual name
//     const fullNameLine = lines[0] || '';

//     // Split into words
//     const nameParts = fullNameLine.split(' ').filter(part => part);

//     // Extract parts
//     const customerFirstName = nameParts[0] || '';
//     const customerLastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
//     const customerMiddleName = nameParts.length > 2
//       ? nameParts.slice(1, nameParts.length - 1).join(' ')
//       : '';


//     // === Amount Numeric ===
//     const amountMatch = extractedText.match(/\$\s?(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2}))/);
//     const amountNumeric = amountMatch ? amountMatch[1].replace(',', '') : '';

//     // === Amount in Words ===
//     const amountWordsMatch = extractedText.match(/([A-Z\s\-]+)\s+DOLLARS/i);
//     const amountWords = amountWordsMatch ? amountWordsMatch[1].trim() + ' DOLLARS' : '';

//     // === Date ===
//     const dateMatch = extractedText.match(/(?:DATE|Dated)[:\s]*([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4})/i) ||
//       extractedText.match(/([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4})/);
//     const date = dateMatch ? dateMatch[1] : '';

//     const parsedData = {
//       imageUrl,
//       customerName: customerName,
//       customerFirstName,
//       customerMiddleName,
//       customerLastName,
//       amountNumeric,
//       amountWords,
//       date,
//       payee: '',
//       memo: '',
//       company: '',
//       checkType: '',
//       extractedText,
//     };



//     res.json(parsedData);
//   } catch (error) {
//     console.error('Error during scan:', error);
//     res.status(500).json({ error: 'Failed to process image' });
//   }
// };


exports.scanCheck = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }
    // Save image locally
    const filename = `${Date.now()}-${req.file.originalname}`;
    const filepath = path.join(__dirname, '..', 'upload', filename);
    fs.writeFileSync(filepath, req.file.buffer);
    const imageUrl = `${baseUrl}/upload/${filename}`;
    // OCR detection
    const [result] = await client.documentTextDetection({
      image: { content: req.file.buffer },
    });
    const extractedText = result.fullTextAnnotation?.text || '';
    if (!extractedText) {
      return res.status(400).json({ error: 'No text extracted from image' });
    }
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
      }
    }

    // === Name Breakdown ===
    const nameParts = customerName.split(' ').filter(Boolean);
    const customerFirstName = nameParts[0] || '';
    const customerLastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
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

    // === Date Extraction ===
    let date = '';
    const dateRegex = /(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/;
    for (const line of lines) {
      const match = line.match(dateRegex);
      if (match) {
        date = match[1];
        break;
      }
    }

    // === Final structured response ===
    const parsedData = {
      imageUrl,
      customerName,
      customerFirstName,
      customerMiddleName,
      customerLastName,
      amountNumeric,
      amountWords,
      date,
      payee: customerName,
      memo: '',
      company: '',
      checkType: '',
      extractedText: cleanText,
    };

    res.json(parsedData);
  } catch (error) {
    console.error('Error during scan:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
};


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





