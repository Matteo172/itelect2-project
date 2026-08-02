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

export const tasks = [
  { id: 1, title: "Finish GT5", dueDate: "2026-08-05", completed: false },
  { id: 2, title: "Review Express docs", dueDate: "2026-08-03", completed: true },
  { id: 3, title: "Submit repo link", dueDate: "2026-08-05", completed: false },
];
