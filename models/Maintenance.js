const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  type: { type: String, required: true },
  date: { type: Date, default: Date.now },
  mileage: { type: Number, required: true },
  description: String
});

module.exports = mongoose.model('Maintenance', maintenanceSchema); 