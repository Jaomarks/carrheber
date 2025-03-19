const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const authenticate = require('../middleware/auth');

router.get('/', authenticate, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const [cars, total] = await Promise.all([
      Car.find().populate('currentTrip').skip(skip).limit(limit),
      Car.countDocuments()
    ]);

    res.json({
      data: cars,
      pagination: {
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar carros' });
  }
});

module.exports = router; 