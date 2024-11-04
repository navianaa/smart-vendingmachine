// mqttClient.js
const mqtt = require('mqtt');
const db = require('./connection'); 

// Ganti dengan URL broker MQTT yang digunakan (misalnya, broker lokal atau broker publik)
const brokerUrl = 'mqtt://broker.hivemq.com'; 
const topic = 'sensor/data'; 

// Membuat koneksi ke broker MQTT
const client = mqtt.connect(brokerUrl);

// Ketika berhasil terhubung ke broker
client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe(topic, (err) => {
        if (err) {
            console.error('Failed to subscribe to topic:', topic);
        } else {
            console.log(`Subscribed to topic: ${topic}`);
        }
    });
});

// Ketika pesan diterima dari broker
client.on('message', (receivedTopic, message) => {
    if (receivedTopic === topic) {
        try {
            const sensorData = JSON.parse(message.toString());
            const { temperature, humidity } = sensorData;
            const timestamp = new Date();

            // Menyimpan data ke dalam tabel kondisi
            db.query('INSERT INTO kondisi (temperature, humidity, timestamp) VALUES (?, ?, ?)', 
                     [temperature, humidity, timestamp], 
                     (error, results) => {
                if (error) {
                    console.error('Error inserting sensor data:', error);
                } else {
                    console.log('Sensor data inserted into database:', sensorData);
                }
            });
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    }
});

module.exports = client;
