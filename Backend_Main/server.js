const express = require('express');
require('dotenv').config();

const sequelize = require('./src/config/database');
const connectMongo = require('./src/config/mongo'); // MongoDB connection function

const User = require('./src/models/user'); 

const app = express();

// Middleware (for JSON request parsing)
app.use(express.json());

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Root route for browser convenience
app.get('/', (req, res) => {
  res.send(
    `<html><head><title>Fintrix</title></head><body><h1>Fintrix server</h1><p>Server is running. Check <a href="/health">/health</a> for JSON status.</p></body></html>`
  );
});

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    // Connect PostgreSQL
    await sequelize.sync({ alter: true });
    console.log('✅ PostgreSQL connected and synchronized');

    // Connect MongoDB
    await connectMongo();
    console.log('✅ MongoDB connected successfully');

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Fintrix server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Database connection failed:', err);
  }
})();

module.exports = app;

