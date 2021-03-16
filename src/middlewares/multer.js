const multer = require('multer');
const MulterSharpResizer = require('multer-sharp-resizer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};

// Filter files with multer
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Not an image! Please upload only images.', false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/images/upload');
  },
  filename: (req, file, callback) => {
    // const name = file.originalname.split(' ').join('_')
    const name = `updev-${Date.now()}`;
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + '.' + extension);
  },
});

module.exports = {
  multer: multer({ storage: storage, fileFilter: multerFilter }).single(
    'image'
  ),
  multerTwoFiles: multer({ storage: storage, fileFilter: multerFilter }).fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }])
};

/*

const resizeImagesGalleryFunc = async (req, res, next) => {
  try {
    const today = new Date()
    const year = today.getFullYear()
    const month = `${today.getMonth() + 1}`.padStart(2, '0')
    const filename = `test-${Date.now()}`
    const sizes = [
      { path: 'original', width: null, height: null },
      { path: 'large', width: 800, height: 800 },
      { path: 'medium', width: 300, height: 300 },
      { path: 'thumbnail', width: 100, height: 100 }
    ]

    const uploadPath = `./images/${year}/${month}`
    const fileUrl = `${req.protocol}://${req.get(
      'host'
    )}/uploads/${year}/${month}`
    // sharp options
    const sharpOptions = {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255 }
    }
    // create a new instance of MulterSharpResizer and pass params
    const resizeObj = new MulterSharpResizer(
      req,
      filename,
      sizes,
      uploadPath,
      fileUrl,
      sharpOptions
    )
    // call resize method for resizing files
    resizeObj.resize()
    // get details of uploaded files
    const images = resizeObj.getData()
    console.log(images)
    next()
  } catch (err) {
    console.log(err)
  }
}

 */
