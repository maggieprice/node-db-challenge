const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();


// project endoints
router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects' });
  });
});

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});


// resource endpoints

router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(resources => {
        res.json(resources);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
      });
  });

  router.post('/resources', (req, res) => {
    const resourceData = req.body;
  
    Projects.addResource(resourceData)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });




module.exports = router;

