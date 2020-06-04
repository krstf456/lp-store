const uploadModel =  require("../models/Upload.model");


getImage = async (req, res, next) => {
  try {
    const id = req.params.id;
    const doc = await uploadModel.findById(id, req.body);
    res.contentType(doc.contentType);
    res.send(doc.data)
  } catch (err) {
    next(err)
  }
};


uploadImage = async (req, res, next) => {
  try{
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({status: 'No files were uploaded.'});
    }
      const uploadedImage = new uploadModel({
      name: req.files.image.name,
      data: req.files.image.data,
      contentType: req.files.image.mimetype
    });
    await uploadedImage.save()
    uploadedImage.data = undefined
    res.status(200).json(uploadedImage)
  } catch(err){
    next(err)
  }
}

module.exports = {
  uploadImage,
  getImage
}




