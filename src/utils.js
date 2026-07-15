console.log("======utils.js======\n")

//Date
export const formatDate = (date) => `Due: ${date.toLocaleDateString()}`;
console.log("Format Date:");
console.log(formatDate(new Date("2026-07-22")));

console.log("");

//Task
export const validateTask = ({ title, dueDate } = {}) => Boolean(title && dueDate);
console.log("Validate Task:")
console.log(validateTask());
console.log(validateTask({ title: "Deadline"}));
console.log(validateTask({ title: "Deadline" , dueDate: "2026-07-22" }));

console.log("");

// MergeTaskUpdate
export const mergeTaskUpdate = (original, ...updates) => {
  let result = { ...original };

  for (let i = 0; i < updates.length; i++) {
    let update = updates[i];

    if (update.title) {
      result.title = update.title;
    }
    if (update.dueDate) {
      result.dueDate = update.dueDate;
    }
  }

  return result;
};
console.log("Merge Task Update Task:")

console.log(mergeTaskUpdate({ title: "Old" }, { title: "New" } , {title: "Newest"}));
