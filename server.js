const express = require('express');

const ProjectRouter = require('./projects/ProjectRouter.js');
const ResourceRouter = require('./resources/ResourceRouter.js');
const TaskRouter = require('./tasks/TaskRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);
module.exports = server;