const path = require('path');
const fs = require('fs').promises;

const filePath = path.join(__dirname, 'student.json');

const readStudentsFromFile = async () => {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        console.log(error.message);
    }
};

const writeStudentsToFile = async (records) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(records, null, 2));
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { readStudentsFromFile, writeStudentsToFile };