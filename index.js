console.log("Week - 11: Database example with Node.js and PostgreSQL")
const ProjectDao = require('./dao/projectDao');
const StudentDao = require('./dao/studentDao');
const db = require('./db/database');
try {
    db.testDbConnection();
    //ProjectDao.updateProject('Project 2', 'Updated description for Project 2');

    // ProjectDao.addNewProject('Project 1', 'Description for Project 1', 'New York');
    // ProjectDao.addNewProject('Project 2', 'Description for Project 2', 'New York');
    // ProjectDao.addNewProject('Project 3', 'Description for Project 3', 'Toroto');

    // ProjectDao.getProjects();
    // ProjectDao.getProjectByName('Project 2');
    // ProjectDao.deleteProject('Project 1');


    // StudentDao.addNewStudent('John', 'Doe', 30, 'New York');
    // StudentDao.addNewStudent('Jane', 'Doe', 32, 'Toronto');
    // StudentDao.addNewStudent('Alice', 'Smith', 25, 'New York');

    StudentDao.getStudents();
    StudentDao.getStudentsByCity('New York');
        
} catch (error) {
    console.error('Error: ', error);
}