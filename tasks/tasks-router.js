const express = require('express');

const TModel = require('./tasks-model.js');

const router = express.Router();


// Find Tasks

router.get('/', (req, res) => {
    TModel.findTasks()
        .then(task => {
            res.json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to retreive tasks'})
        })
})

// Add Task

router.post('/', (req, res) => {
    const newTask = req.body;
    TModel.addTask(newTask)
        .then(tasks => {
            res.status(200).json(newTask);
        })
        .catch(err => {
            res.status(500).json({message: "Unable to add task"})
        });
});




module.exports = router;