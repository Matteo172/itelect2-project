// app.js - Main application entry point
console.log('\n======app.js======\n');

//imports from utils.js
import { formatDate, validateTask, mergeTaskUpdate } from "./utils.js";

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
