const Task = require('../models/Task');

class TaskController {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    getAllTasks(req,res) {
        res.json(this.tasks);
    }

    getTaskById(req, res) {
        const { id } = req.params;
        const task = this.tasks.find(task => task.id === parseInt(id));
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found'});
        }
    }

    createTask(req,res) {
        const { title } = req.body;
        const newTask = new Task(this.currentId++, title);
        this.tasks.push(newTask);
        res.status(201).json(newTask);
    }
    updateTask(req, res) {
        const { id } = req.params;
        const { title, completed } = req.body;
        const task = this.tasks.find(task => task.id === parseInt(id));

        if (task) {
            if (title !== undefined) task.title = title;
            if (completed !== undefined) task.completed = completed;
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    }

    deleteTask(req, res) {
        const { id } = req.params;
        const index = this.tasks.findIndex(task => task.id === parseInt(id));
        if (index !== -1) {
            this.tasks.splice(index, 1);
            res.json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    }
}

module.exports = new TaskController();