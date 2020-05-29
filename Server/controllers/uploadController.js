const  uuid = require('uuid')
const uploadModel =  require("../models/Upload.model");

uploadImage = async (req, res) => {

  const uploadedImage = new uploadModel(req.files);
  console.log(req.files)
  console.log(uploadedImage)
  //const uploadedImage = new uploadedFile(req.body)
  //const id = uuid.v4()
  //const imageName = id + req.files.image.name
  //req.files.image.mv('./uploadFile/' + imageName)
  //res.json({src: '/uploadFile/' + imageName})
  await uploadedImage.save()
  res.send(uploadedImage)
}

module.exports = {
  uploadImage
}





/*
// our model
var A = mongoose.model('A', schema);




    // store an img in binary in mongo
    var a = new A;
    a.img.data = fs.readFileSync(imgPath);
    a.img.contentType = 'image/png';
    a.save(function (err, a) {
      if (err) throw err;

      console.error('saved img to mongo');

      // start a demo server
      var server = express.createServer();
      server.get('/', function (req, res, next) {
        A.findById(a, function (err, doc) {
          if (err) return next(err);
          res.contentType(doc.img.contentType);
          res.send(doc.img.data);
        });
      });


  

      process.on('SIGINT', function () {
        server.close();
      });
    });
  });

});

*/