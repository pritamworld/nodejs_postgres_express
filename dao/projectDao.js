const { ProjectModel } = require('../models/project');

exports.addNewProject = async(title, description) => {
    //Insert a new project
    const project = await ProjectModel.create({
        title,
        description
    });
    console.log('Project Inserted successfully');
    return project;
}



exports.deleteProject = async (title) => {
    // Delete a project
    const project = await ProjectModel.destroy({
        'where': { 'title': title }
    });
    console.log('Project deleted successfully');
    return project;
}

exports.updateProject = async (title, description) => {
    // Update a project
    const project = await ProjectModel.update({
        'description': description
    }, {
        'where': { 'title': title }
    });
    console.log('Project updated successfully');
    return project;
}

exports.getProjects = async () => {
    // Query the projects
    const projects = await ProjectModel.findAll();
    console.log('All projects:', JSON.stringify(projects, null, 4));
    return projects;
}


exports.getProjectByName = async (title) => {
    const project = await ProjectModel.findAll({
            'where': { 'title': title }})
    console.log('Project 2:', JSON.stringify(project, null, 4));
    return project
}

