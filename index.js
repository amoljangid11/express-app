const express = require('express');
const app = express();

// Middleware
const sampleMiddleware = (req, res, next) => {
  // Do something in the middleware
  console.log('Middleware executed');
  next();
};

// Routes
app.use(sampleMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'API data response' });
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

module.exports = app;
