const router = require('express').Router()
const { uploadImage} = require('../controllers/uploadController')

// add image
router.post('/uploads', uploadImage,  (req, res) => {})

module.exports = router