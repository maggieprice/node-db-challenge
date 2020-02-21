const db = require("../data/.db-config.js");

module.exports = {
  find,
  findById,
  findTasks,
  findResources,
  add,
  addTask,
  addResource
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function findTasks(id) {
    return db("tasks")
      .join("projects", "project.id", "tasks.project_id")
      .select("tasks.id", "projects.project_name", "projects.description", "tasks.description", "tasks.notes", "tasks.completed")
      .where("project_id", id);
  }  

  function findResources() {
    return db("resources")   
  }  

function add(project) {
  return db("projects").insert(project, "id");
}

function addTask(task) {
    return db("tasks").insert(task, "id");
  }

  function addResource(resource) {
    return db("resources").insert(resource, "id");
  }

//   .join("projects", "projects.id", "resources.project_id")
//       .select("resources.id", "projects.project_name", "resources.step_number", "resources.intructions")
//       .where("project_id", id);
