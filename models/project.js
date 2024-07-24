const { sq } = require('../db/database');
const { DataTypes } = require("sequelize");
// Define a "Project" model
const ProjectModel = sq.define('Project', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
});

ProjectModel.sync({alter: true}).then(() => {
    console.log("Project Model  synced");
});

exports.ProjectModel = ProjectModel;

/*
User.sync(): Create the table if it doesn't exist and does nothing if it exists.
User.sync({ force: true }): Create the table and drop the first if it already exists.
User.sync({ alter: true }): Check the current state of the table in the database and perform necessary changes in the table to make it match the model.
*/
