const db = require("../data/.db-config.js");

module.exports = {
  findById,
  findTasks,
  addTask
};

function findById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function findTasks() {
    return db("tasks")
      .join("projects", "projects.id", "tasks.project_id")
      .select("tasks.id", "projects.project_name", "projects.description", "tasks.task_description", "tasks.notes", "tasks.completed as task_completed")
   
  }  

 
function addTask(task) {
    return db("tasks").insert(task, "id");
  }
