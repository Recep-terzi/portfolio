const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary')

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder:'portfolio_projects',
        allowed_formats:['jpg','jpeg','png']
    }
})

const parser = multer({storage : storage})

module.exports = parser;