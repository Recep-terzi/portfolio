const Project = require("../models/Project");



const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        res.json(projects)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

const addProject = async (req, res) => {
  try {
    const { projectTitle, projectInfo, projectMaterial } = req.body;
    const projectImage = req.file.path; 
    const materialArray = projectMaterial.split(',').map(item => item.trim());
    const newProject = new Project({
      projectTitle,
      projectInfo,
      projectMaterial: materialArray,
      projectImage,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Project creation failed', error });
  }
};

module.exports = { getProjects,addProject };