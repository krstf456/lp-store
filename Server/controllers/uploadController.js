const  uuid = require('uuid')
const uploadModel =  require("../models/Upload.model");


getImage = async (req, res, next) => {
  try {
    const id = req.params.id;
    const doc = await uploadModel.findById(id, req.body);
    console.log("hej")
    //res.contentType(doc.image.contentType);
    //res.send(doc.image.data)
    let base64 = (doc.image.data.toString('base64'));
    res.send(base64)
  } catch (err) {
    next(err)
  }
};


uploadImage = async (req, res) => {
  try{
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({status: 'No files were uploaded.'});
    }
  
    const id = uuid.v4()
    req.files.image.name = id + req.files.image.name
    const uploadedImage = new uploadModel(req.files);
    await uploadedImage.save()
    res.status(200).send('Image uploaded')
  } catch(err){
    next(err)
  }
}

module.exports = {
  uploadImage,
  getImage
}




