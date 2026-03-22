const fs = require('fs');
const db = require('../modules/fileHandler');
const student = require('../models/student');

const getAllStudents = async (req, res) => {
    try {
        //const studentsData = await db.readStudentsFromFile();
        const studentsData = await student.find();

        if(!studentsData) {
            return res.status(404).json({message: 'No students found'});
        }

        res.status(200).json(studentsData);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createStudent = async (req, res) => {
    try {
        const{ name,age,course,email } = req.body;
        if(!name || !age || !course || !email) {
            return res.status(400).json({message: 'Details are missing'});
        }


        // read the file first
        // let existingStudents = await db.readStudentsFromFile();
        // let existingStudents = await student.find();

        //if existing students is null or undefined, initialize it as an empty array

        // if(!existingStudents) {
        //     existingStudents = [];
        // }

        //create and push new student

        const newStudent = {
            // id: existingStudents.length + 1,
            name,
            age,
            course,
            email
        };

        // existingStudents.push(newStudent);
        await student.create(newStudent);

        // await db.writeStudentsToFile(existingStudents);

        res.status(201).json({message: 'Student created successfully', student: newStudent});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!id || !name || !branch) {
            return res.status(400).json({ message: 'Details are missing' });
        }

        let existingStudents = await db.readStudentsFromFile();

        const studentIndex = existingStudents.findIndex(
            student => student.id === Number(id)
        );

        if (studentIndex === -1) {
            return res.status(404).json({ message: 'Student not found' });
        }

        existingStudents[studentIndex] = {
            id: Number(id),
            name,
            branch
        };

        await db.writeStudentsToFile(existingStudents);

        res.status(200).json({
            message: 'Student updated successfully',
            student: existingStudents[studentIndex]
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteData = async (req,res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({message: 'ID is missing'});
        }

        // let existingStudents = await db.readStudentsFromFile();
        

        // if(!existingStudents) {
        //     return res.status(404).json({message: 'No students found'});
        // }

        // const studentIndex = existingStudents.findIndex(student => student.id === id);

        // if(studentIndex === -1) {
        //     return res.status(404).json({message: 'Student not found'});
        // }

        // const deletedStudent = existingStudents.splice(studentIndex, 1);

        // await db.writeStudentsToFile(existingStudents);

        await student.findByIdAndDelete(id);

        res.status(200).json({message: 'Student deleted successfully', student: deletedStudent[0]});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

// const getById = async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (!id) {
//             return res.status(400).json({ message: 'ID is required' });
//         }

//         const existingStudents = await db.readStudentsFromFile();

//         if (!existingStudents || existingStudents.length === 0) {
//             return res.status(404).json({ message: 'No students found' });
//         }

//         const student = existingStudents.find(student => student.id === id);

//         if (!student) {
//             return res.status(404).json({ message: 'Student not found' });
//         }

//         res.status(200).json({
//             message: 'Student fetched successfully',
//             student: student
//         });

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

module.exports = { getAllStudents , createStudent , updateData, deleteData };