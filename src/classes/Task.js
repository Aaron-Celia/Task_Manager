class Task {
    constructor(name, priority, flagColor) {
        this.name = name;
        this.priority = priority;
        this.isCompleted = false;
        this.flagColor = flagColor ? flagColor : null;
    }
    markCompleted() {
        this.isCompleted = true;
    }
    updatePriority(newPriority) {
        this.priority = newPriority;
    }
    updateName(newName) {
        this.name = newName;
    }
    updateFlagColor(newFlagColor) {
        this.flagColor = newFlagColor;
    }
}

export function createClass(name, priority, flagColor) {
    return new Task(name, priority, flagColor ? flagColor : null);
}