// routes/sensorRoutes.js
const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/kondisi'); // Pastikan ini sesuai

// Route untuk mendapatkan semua data sensor
router.get('/', sensorController.getSensorData);

// Route untuk menambahkan data sensor baru
router.post('/', sensorController.addSensorData);

module.exports = router;
