const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  licensePlate: { type: String, unique: true, required: true },
  color: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, min: 1900, max: new Date().getFullYear() + 1 },
  currentDriver: { type: String },
  currentLocation: { type: String },
  startKm: { type: Number },
  startTime: { type: Date }
});

module.exports = mongoose.model('Car', carSchema); 