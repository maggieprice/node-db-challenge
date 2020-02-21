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
      .join("projects", "tasks.project_id",  "projects.id")
      .select('*')
  }  

function addTask(task) {
    return db("tasks").insert(task, "id");
  }
