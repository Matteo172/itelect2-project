//Date
export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;

//Task
export const validateTask = ({ title, dueDate } = {}) => Boolean(title && dueDate);


// MergeTaskUpdate
export const mergeTaskUpdate = (original, ...updates) => updates.reduce((result, update) => ({ ...result, ...update }), { ...original });


export class TaskValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "TaskValidationError";
  }
}

export const createTask = (taskData) => {
  if (!validateTask(taskData)) {
    throw new TaskValidationError("Invalid task data");
  }
  return { id: Date.now(), completed: false, ...taskData };
};


