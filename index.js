console.log("Week - 11: Database example with Node.js and PostgreSQL")
const ProjectDao = require('./dao/projectDao');
const StudentDao = require('./dao/studentDao');
const database = require('./db/database')
const express = require('express')
const app = express()

app.use(express.json())

app.post("/project", async (req, res) => {
    try{
        console.log(req.body)
        const projects = await ProjectDao.addNewProject(req.body.title, req.body.description);
        res.send(projects)
    }catch(err) {
        res.send(err)
    }
})

app.put("/project", async (req, res) => {
    try{
        console.log(req.body)
        const projects = await ProjectDao.updateProject(req.body.title, req.body.description);
        res.send(projects)
    }catch(err) {
        res.send(err)
    }
})

app.delete("/project/:title", async (req, res) => {
    try{
        console.log(req.params)
        const projects = await ProjectDao.deleteProject(req.params.title);
        res.send(projects)
    }catch(err) {
        res.send(err)
    }
})

app.get("/projects", async (req, res) => {
    try{
        const projects = await ProjectDao.getProjects();
        res.send(projects)
    }catch(err) {
        res.send(err)
    }
})

app.get("/project/:title", async (req, res) => {
    try{
        console.log(req.params)
        const projects = await ProjectDao.getProjectByName(req.params.title);
        res.send(projects)
    }catch(err) {
        res.send(err)
    }
})

app.listen(3000, async()=>{
    console.log('http://localhost:3000/')
    //await database.testDbConnection()
})

/*
try {

    //ProjectDao.getProjects();
    //ProjectDao.getProjectByName('Project 2');
    //ProjectDao.deleteProject('Project 1');


    //StudentDao.getStudents();
    //StudentDao.getStudentsByCity('New York');
        
} catch (error) {
    console.error('Error: ', error);
}
*/