// server.js - entrypoint that boots the Express app
const express = require('express');
require('dotenv').config();

const app = express();

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

app.listen(PORT, () => {
  console.log(`Fintrix server listening on port ${PORT}`);
});

module.exports = app;
