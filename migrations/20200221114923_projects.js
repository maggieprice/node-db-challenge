
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', projects => {
        projects.increments();
        projects.string('project_name', 255)
                .notNullable();
        projects.string('description', 1024);
        projects.boolean('completed')
                .notNullable();
    })
    .createTable('resources', resources => {
        resources.increments();
        resources.string('name', 128)
                .notNullable();
        resources.string('resource_description', 1024);

    })
    .createTable('tasks', tasks => {
        tasks.increments();
        tasks.string('task_description', 1024);
        tasks.string('notes')
             .notNullable();
        tasks.boolean('completed')
             .notNullable();
        tasks.integer('project_id')
        .unsigned()
        .references('projects.id');
        
    })
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
