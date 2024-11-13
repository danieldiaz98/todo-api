class Task {
    
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;        
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

module.exports = Task;