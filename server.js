require('dotenv').config();
const express = require('express');
const app = express();
const contactRoute = require('./routes/contact');

app.use(express.json());
app.use('/contact', contactRoute);

app.listen(3000, () => {
  console.log('Sunucu çalışıyor: http://localhost:3000');
});
