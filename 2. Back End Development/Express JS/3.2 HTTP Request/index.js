import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1>")
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact Us</h1>")
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});