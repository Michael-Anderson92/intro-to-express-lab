// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route for a specific URL
app.get('/mywebsite', (req, res) => {
  // Send a response
  res.send('Hello, world!');
});

// Start the server and listen on a port
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Define a route with a username parameter
app.get('/greetings/:username', (req, res) => {
  const username = req.params.username;
  const greeting = `Hello there, ${username}! What a delight it is to see you once more.`;
  res.send(greeting);
});

app.get('/roll/:number', (req, res) => {
  const number = req.params.number;
  if (isNaN(number)) {
    res.send('Invalid input: Please provide a number.') }
    else {
      const greeting = `You rolled a ${number}`;
      res.send(greeting);
    }
})

app.get('/collectibles/:index', (req, res) => {
  const index = req.params.index; // Corrected from req.params.number to req.params.index
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  if (index >= collectibles.length) {
    res.send('This item is not yet in stock. Check back soon!'); }
    else {
  res.send(`So you want the ${collectibles[index].name}? For $${collectibles[index].price}, it can be yours!`); // Fixed the property access syntax
}});

app.get('/hello', (req, res) => {
  res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
});


const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
  let filteredShoes = shoes;

  const minPrice = parseFloat(req.query['min-price']);
  const maxPrice = parseFloat(req.query['max-price']);
  const type = req.query.type;

  if (!isNaN(minPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
  }

  if (!isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
  }

  if (type) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
  }

  res.send(filteredShoes);
});

