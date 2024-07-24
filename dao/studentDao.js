const { StudentModel } = require('../models/students');
const sequelize = require('sequelize');

exports.addNewStudent = async (first_name, last_name, age, city) => {
    // Insert a new student
    const student =  await StudentModel.create({
        first_name,
        last_name,
        age,
        city
    });
    console.log('Student Inserted successfully');
    return student;
}


//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
exports.getStudents = async () => {
    // Query the students
    const students = await StudentModel.findAll({
        attributes: ['first_name', 'last_name', 'age', 'city'],
        where: {
            age: {
                [sequelize.Op.gt]: 25
            }
        },
        order: [['first_name', 'ASC']]
    });
    //const students = await StudentModel.findAll();
    console.log('All students:', JSON.stringify(students, null, 4));
    return students;

   
}
exports.getStudentsByCity = async (city) => {
    // Query the students by city
    const students = await StudentModel.findAll({
        'where': {'city': city}
    });
    console.log(`Students from ${city}:`, JSON.stringify(students, null, 4));
    return students;
}

exports.findStudentByEmail = async (email) => {
    // Query the students by email
    const student = await StudentModel.findOne({ where: { 'email':email } });
    console.log('Student by email:', JSON.stringify(student, null, 4));
    return student;
}