const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

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

module.exports = router;

// router.get('/:id/steps', (req, res) => {
//     const { id } = req.params;
  
//     Projects.findTasks(id)
//     .then(steps => {
//       if (steps.length) {
//         res.json(steps);
//       } else {
//         res.status(404).json({ message: 'Could not find steps for given project' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get steps' });
//     });
//   });

// router.post('/:id/steps', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params; 

//   Projects.findById(id)
//   .then(project => {
//     if (project) {
//       Projects.addStep(stepData, id)
//       .then(step => {
//         res.status(201).json(step);
//       })
//     } else {
//       res.status(404).json({ message: 'Could not find project with given id.' })
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new step' });
//   });
// });