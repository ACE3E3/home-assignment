const express = require('express');
var data = require('../data/student-data.json')

const router = express.Router();

router.get('/student_details', async(req, res) => {
    const student = data;
    res.json({data : student});
})

router.post('/sub-results', async(req,res) => {
    let student = data;
    console.log(req.body);
    if(req.body.sub == 'Maths'){
        student = student.filter(x => x.subject==='Maths')
    }
    else if(req.body.sub == 'Science'){
        student = student.filter(x => x.subject==='Science')
    }
    else if(req.body.sub == 'English'){
        student = student.filter(x => x.subject==='English')
    }
    else{
        student = "There are no students of this subject"
    }
    res.json({data : student});
})

router.post('/filter-age-students', async(req,res) => {
    let student = data;
    console.log(req.body);
    if(req.body.age == 18){
        student = student.filter(x => x.age==18)
    }
    else if(req.body.age == 17){
        student = student.filter(x => x.age==17)
    }
    else if(req.body.age == 16){
        student = student.filter(x => x.age==16)
    }
    else{
        student = "There are no students of this age"
    }
    res.json({data : student});
})

router.post('/highest-in-sub', async(req,res) => {
    let student = data;
    console.log(req.body);
    if(req.body.sub == 'Maths'){
        student = student.filter(x => x.subject==='Maths')
        var filter_student = student.reduce((prev, curr) => {
            return prev.total_marks > curr.total_marks ? prev : curr
        })
    }
    else if(req.body.sub == 'Science'){
        student = student.filter(x => x.subject==='Science')
        var filter_student = student.reduce((prev, curr) => {
            return prev.total_marks > curr.total_marks ? prev : curr
        })
    }
    else if(req.body.sub == 'English'){
        student = student.filter(x => x.subject==='English')
        var filter_student = student.reduce((prev, curr) => {
            return prev.total_marks > curr.total_marks ? prev : curr
        })
    }
    else{
        student = "There are no students of this subject"
    }
    res.json({data : filter_student});
})

module.exports = router;