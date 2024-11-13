const express = require('express')
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.getAllTasks.bind(TaskController));
router.get('/:id', TaskController.getTaskById.bind(TaskController));
router.post('/', TaskController.createTask.bind(TaskController));
router.put('/:id', TaskController.updateTask.bind(TaskController));
router.delete('/:id', TaskController.deleteTask.bind(TaskController));

module.exports = router;