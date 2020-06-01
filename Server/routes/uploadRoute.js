const router = require('express').Router()
const { getImage, uploadImage} = require('../controllers/uploadController')

// Get Image
router.get('/uploads/:id', getImage,  async (req, res) => {})

// Add image
router.post('/uploads', uploadImage,  async (req, res) => {})

module.exports = router