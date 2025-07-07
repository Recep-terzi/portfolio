const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    projectImage: String,
    projectTitle: String,
    projectInfo: String,
    projectMaterial: Array, 
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);