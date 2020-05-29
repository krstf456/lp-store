const  uuid = require('uuid')

uploadImage = async (req, res) => {
  console.log(req.files)

  const id = uuid.v4()
  const imageName = id + req.files.image.name
  req.files.image.mv('./uploadFile/' + imageName)
  res.json({src: '/uploadFile/' + imageName})
};

module.exports = {
  uploadImage
}
