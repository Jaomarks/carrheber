const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Trip = require('../models/Trip');
const Maintenance = require('../models/Maintenance');
const authenticate = require('../middleware/auth');

router.get('/stats', authenticate, async (req, res) => {
  try {
    const [
      totalCars,
      activeTrips,
      totalMaintenance,
      mileageReport
    ] = await Promise.all([
      Car.countDocuments(),
      Trip.countDocuments({ status: 'active' }),
      Maintenance.countDocuments(),
      Car.aggregate([
        {
          $group: {
            _id: null,
            totalMileage: { $sum: "$mileage" }
          }
        }
      ])
    ]);

    res.json({
      totalCars,
      activeTrips,
      totalMaintenance,
      totalMileage: mileageReport[0]?.totalMileage || 0
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar relatório' });
  }
});

module.exports = router; 