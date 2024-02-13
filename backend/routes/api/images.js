// routes/api/images.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const Image = require('../../models/Image');

// Multer configuration for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB file size limit
  },
  fileFilter: fileFilter
});

// @route   POST api/images/upload
// @desc    Upload image
// @access  Private
router.post('/upload', passport.authenticate('jwt', { session: false }), upload.single('image'), (req, res) => {
  const newImage = new Image({
    user: req.user.id,
    imageUrl: req.file.path
  });

  newImage.save()
    .then(image => res.json(image))
    .catch(err => console.log(err));
});

module.exports = router;

