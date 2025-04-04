const express = require('express')
const cors = require('cors')
const quotes = require('./data/quotes')
const app = express()
const PORT = 3000

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
  
}

const corsOptions = {
  origin: '*', // Allow all origins
  // origin: 'http://localhost:3000', // Allow specific origin
  // origin: 'http://127.0.0.1:5500', 
};



app.use(cors(corsOptions));

app.get('/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
})

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`);
})
