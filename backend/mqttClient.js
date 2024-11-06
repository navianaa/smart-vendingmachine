const mqtt = require('mqtt');
const db = require('./connection'); 

// Ganti dengan URL broker MQTT yang digunakan
const brokerUrl = 'mqtt://broker.hivemq.com'; 
const topic = 'sensor/data'; 

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
            // Parsing data sensor yang diterima
            const sensorData = JSON.parse(message.toString());
            console.log('Data yang diterima:', sensorData);

            // Ambil hanya data suhu dan kelembapan jika ada
            const temperature = sensorData.temperature;
            const humidity = sensorData.humidity;

            // Cek apakah data suhu dan kelembapan ada dan valid
            if (temperature !== undefined && humidity !== undefined) {
                // Pastikan suhu dan kelembapan adalah angka yang valid
                if (temperature !== null && !isNaN(temperature) && humidity !== null && !isNaN(humidity)) {
                    const timestamp = new Date();

                    // Menyimpan data suhu dan kelembapan ke dalam database
                    db.query('INSERT INTO kondisi (temperature, humidity, timestamp) VALUES (?, ?, ?)', 
                             [temperature, humidity, timestamp], 
                             (error, results) => {
                        if (error) {
                            console.error('Error inserting sensor data:', error);
                        } else {
                            console.log('Sensor data inserted into database:', { temperature, humidity });
                        }
                    });
                } else {
                    console.error('Invalid temperature or humidity data:', { temperature, humidity });
                }
            } else {
                console.error('Missing temperature or humidity data:', sensorData);
            }
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    }
});

module.exports = client;
