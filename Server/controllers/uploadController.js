const fileUpload = require('express-fileupload')

uploadImage = async (req, res) => {
  console.log(req.files)
  res.json("success")
};

module.exports = {
  uploadImage
}
