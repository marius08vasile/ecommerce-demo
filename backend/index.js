const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const cors = require('cors');

const ARTICLES_FILE_PATH = './articles.json';
const ORDERS_FILE_PATH = './orders.json';

let articles = require(ARTICLES_FILE_PATH);
let orders = require(ORDERS_FILE_PATH);

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const updateArticlesFile = (content) => (
  fs.writeFile(ARTICLES_FILE_PATH, JSON.stringify(content, null, 2), (err) => {
    if (err) throw err;
    console.log('Articles file has been updated.');
    articles = content;
  })
);

const updateOrdersFile = (content) => (
  fs.writeFile(ORDERS_FILE_PATH, JSON.stringify(content, null, 2), (err) => {
    if (err) throw err;
    console.log('Orders file has been updated.');
    orders = content;
  })
);

app.get('/articles', (req, res) => {
  return res.json(articles);
});

app.get('/articles/:articleId', (req, res) => {
  const { articleId } = req.params;
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return res.status(404).send(`Article with ID ${articleId} not found.`);
  }

  return res.json(article);
});

app.post('/articles', (req, res) => {
  const { price, title, imageUrl } = req.body;

  if (!price || typeof price !== 'number' || !title || typeof title !== 'string' || !imageUrl || typeof imageUrl !== 'string') {
    return res.status(400).send('Missing or invalid data.');
  }

  const id = uuid.v4();
  const newArticle = { id, price, title, imageUrl };
  const newArticles = [...articles, newArticle];

  try {
    updateArticlesFile(newArticles);
  } catch (e) {
    return res.status(500).send('A server error occured.');
  }

  return res.json(newArticle);
});

app.put('/articles/:articleId', (req, res) => {
  const { articleId } = req.params;
  const index = articles.findIndex(a => a.id === articleId);

  if (index < 0) {
    return res.status(404).send(`ARTICLE with ID ${articleId} not found.`);
  }

  const { price, title, imageUrl } = req.body;

  if (!imageUrl || typeof imageUrl !== 'string' || !price || typeof price !== 'number' || !title || typeof title !== 'string') {
    return res.status(400).send('Missing or invalid data.');
  }

  const newArticle = { ...articles[index], price, imageUrl, title };
  const newArticles = [...articles];
  newArticles.splice(index, 1, newArticle);

  try {
    updateArticlesFile(newArticles);
  } catch (e) {
    return res.status(500).send('A server error occured.');
  }

  return res.json(newArticle);
});

app.delete('/articles/:articleId', (req, res) => {
  const { articleId } = req.params;
  const index = articles.findIndex(a => a.id === articleId);

  if (index < 0) {
    return res.status(404).send(`Article with ID ${articleId} not found.`);
  }

  const newArticles = [...articles];
  newArticles.splice(index, 1);

  try {
    updateArticlesFile(newArticles);
  } catch (e) {
    return res.status(500).send('A server error occurred.');
  }

  return res.send(`Article with ID ${articleId} was deleted.`);
});

app.post('/orders', (req, res) => {
  const { personalInfo, products } = req.body;

  const id = uuid.v4();
  const newOrder = { id, personalInfo, products };
  const newOrders = [...orders, newOrder];

  try {
    updateOrdersFile(newOrders, ORDERS_FILE_PATH);
  } catch (e) {
    return res.status(500).send('A server error occured.');
  }

  return res.json(newOrder);
});


app.listen(PORT, () => console.log(`App running on port ${PORT}`));

module.exports = app;
