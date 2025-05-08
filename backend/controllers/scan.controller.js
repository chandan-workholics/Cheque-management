const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const multer = require('multer');
const path = require('path');

// Initialize S3 Client
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Set up multer to handle image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('image');

// Upload image function
exports.uploadImages = async (req, res) => {
  try {
    // Check if file is provided
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image uploaded' });
    }

    // Generate a unique filename based on the current timestamp
    const filename = `${Date.now()}-${req.file.originalname}`;

    // Set up S3 upload parameters
    const params = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: filename,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    };

    // Upload the file to S3
    const command = new PutObjectCommand(params);
    const data = await s3.send(command);

    // Send success response with the image URL
    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        filename,
        imageUrl: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`,
      },
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    
    res.status(500).json({ success: false, message: 'Failed to upload image' });
  }
};


