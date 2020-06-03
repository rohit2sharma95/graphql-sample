const router = require('express').Router();
const { uploadFile } = require('../utils');

router.post(
  '/upload-many-files',
  uploadFile({ dirName: `${__dirname}../../../assets/images` }).array('files'),
  (req, res) => {
    const serverPath = `${req.protocol}://${req.get('host')}`;
    const files = req.files.map((file) => `${serverPath}/images/${file.filename}`);
    res.status(200).json({ files, message: 'Files were uploaded' });
  }
);

router.post(
  '/upload-single-file',
  uploadFile({ dirName: `${__dirname}../../../assets/images` }).single('file'),
  (req, res) => {
    const serverPath = `${req.protocol}://${req.get('host')}`;
    const files = `${serverPath}/images/${req.file.filename}`;
    res.status(200).json({ files, message: 'File was uploaded' });
  }
);

module.exports = router;
