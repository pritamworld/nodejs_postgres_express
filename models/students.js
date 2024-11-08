const { DataTypes } = require("sequelize");
const { sq } = require('../db/database');
 //Define Student Model
 const StudentModel = sq.define('tblStudent', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    city: DataTypes.STRING
});

StudentModel.sync({alter: true}).then(() => {
    console.log("Student Model  synced");
});

exports.StudentModel = StudentModel;