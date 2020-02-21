const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();


// resource endpoints

router.get('/', (req, res) => {
    Resources.findResources()
    .then(resources => {
        res.json(resources);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' });
      });
  });

  router.post('/', (req, res) => {
    const resourceData = req.body;
  
    Resources.addResource(resourceData)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });




module.exports = router;

