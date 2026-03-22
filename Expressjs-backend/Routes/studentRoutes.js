const express = require('express');

const app = express();
const router = express.Router();

const {getAllStudents,createStudent,updateData,deleteData} = require('../Controllers/studentController');

router.get('/', getAllStudents);
router.post('/', createStudent);
router.put('/',updateData);
router.delete('/:id',deleteData);
// router.get('/:id',getById);
    

module.exports = router;