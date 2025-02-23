const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get service details by ID
router.get('/service/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;