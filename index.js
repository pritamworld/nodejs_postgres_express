console.log("Week - 11: Database example with Node.js and PostgreSQL")
const ProjectDao = require('./dao/projectDao');
const StudentDao = require('./dao/studentDao');

try {

    //ProjectDao.updateProject('Project 2', 'Updated description for Project 2');

    ProjectDao.getProjects();
    ProjectDao.getProjectByName('Project 2');
    //ProjectDao.deleteProject('Project 1');


    StudentDao.getStudents();
    StudentDao.getStudentsByCity('New York');
        
} catch (error) {
    console.error('Error: ', error);
}