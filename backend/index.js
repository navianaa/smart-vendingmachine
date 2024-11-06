const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./connection'); 
// const adminsroute = require('../routes/adminsroute');
const sensorRoutes = require('./routes/sensorRoutes'); 
const mqttClient = require('./mqttClient');


const port = 3000;
app.use(cors()); 
// Mengizinkan hanya origin tertentu
// app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());  


console.log("Starting server...");

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.get('/greet', (req, res) => {
    res.send('Hello! This is another endpoint.');
});

// app.use('/api/admins', require('./routes/adminRoutes'));
app.use('/api/sensors', sensorRoutes);



// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



// app.get('/admins', (req, res) => {
//     db.query("SELECT * FROM admins", (error, results) => {
//         if (error) {
//             console.error("Error fetching data:", error);
//             return res.status(500).send("Error fetching data from database");
//         }
//         res.json(results);
//     });
// })