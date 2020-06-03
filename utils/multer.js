const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  uploadFile: ({ dirName }) => {
    const storage = multer.diskStorage({
      destination(req, file, cb) {
        cb(null, dirName);
      },
      filename(req, file, cb) {
        cb(null, `${crypto.randomBytes(16).toString('hex')}_${Date.now() + path.extname(file.originalname)}`);
      }
    });

    return multer({ storage });
  }
};
