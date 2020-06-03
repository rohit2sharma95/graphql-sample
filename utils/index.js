const {
  authenticate,
  getUserFromToken,
  validateRole
} = require('./auth');
const { uploadFile } = require('./multer');

module.exports = {
  // from auth
  authenticate,
  getUserFromToken,
  validateRole,

  // form multer
  uploadFile
};
