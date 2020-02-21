const db = require("../data/.db-config.js");

module.exports = {
  findResources,
  findById,
  addResource
};

function findById(id) {
    return db("resources")
      .where({ id })
      .first();
  }

  function findResources() {
    return db("resources")   
  }  

  function addResource(resource) {
    return db("resources").insert(resource, "id");
  }

