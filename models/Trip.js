const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  carLicensePlate: { type: String, required: true },
  driver: { type: String, required: true },
  startKm: { type: Number, required: true },
  endKm: { type: Number },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date },
  destination: { type: String },
  parkingLocation: { type: String },
  status: { 
    type: String, 
    enum: ['active', 'completed', 'cancelled'],
    default: 'active'
  }
});

module.exports = mongoose.model('Trip', tripSchema); 