// app.js - Main application entry point
console.log('\n======app.js======\n');

//imports from utils.js
import { formatDate, validateTask, mergeTaskUpdate, createTask } from "./utils.js";

//imports from api.js
import { fetchSampleUsers, fetchSampleUsersPromise } from "./api.js";

console.log("Format Date:")
console.log(formatDate(new Date("2026-07-22")));
console.log("")
console.log("Validate Task:")
console.log(validateTask());
console.log(validateTask({ title: "Deadline"}));
console.log(validateTask({ title: "Deadline" , dueDate: "2026-07-22" }));
console.log("")
console.log("Merge Task Update Task:")
console.log(mergeTaskUpdate({ title: "Old" }, { title: "New" }, { title: "Newest" }));
console.log(mergeTaskUpdate(
  { title: "Old", dueDate: "2026-07-01", completed: false },
  { completed: true, id: 123 }
));

console.log("")
console.log("Create Task:")
try {
  const task = createTask({ title: "GT4", dueDate: "2026-07-22" });
  console.log(task);
 
  const badTask = createTask({ title: "No due date" });
  console.log(badTask);
} catch (err) {
  console.error(`${err.name}: ${err.message}`);
}
 
async function main() {
  console.log("")
  console.log("Fetch Sample Users (async/await):")
  const users = await fetchSampleUsers();
  console.log(users);
 
  console.log("")
  console.log("Fetch Sample Users (.then/.catch):")
  const usersPromise = await fetchSampleUsersPromise();
  console.log(usersPromise);
}
 
main();