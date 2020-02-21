
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', projects => {
        projects.incrememnts()
        projects.string('name', 255)
                .notnullable()
        projects.string('description', 1024)
        projects.boolean('completed')
                .notnullable()
    })
    .createTable('resources', resources => {
        resources.incrememnts()
        resources.string('name', 128)
                .notnullable()
        resources.string('description', 1024)
        resources.integer('project_id')
            .unsigned()
            .references('projects.id')
    })
    .createTable('tasks', tasks => {
        tasks.incrememnts()
        tasks.string('description', 1024)
        tasks.string('notes')
             .notnullable()
        tasks.boolean('completed')
             .notnullable()
        tasks.integer('project_id')
        .unsigned()
        .references('project.id')
    })
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
