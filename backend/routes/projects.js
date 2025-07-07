const express = require('express')
const router = express.Router()
const {getProjects, addProject} = require('../controllers/projectsController')
const verifyToken = require('../middlewares/auth');
const parser = require('../middlewares/multer')

router.get('/', getProjects);
router.post('/', verifyToken, parser.single('projectImage'), addProject);

module.exports = router;