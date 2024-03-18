# Simple Articles API

## Prerequisites

node >= 14.16.7

## How to start the app

```
cd articles-api
npm install
node index.js
```

The Articles API will be accessible on [localhost:3000/articles](http://localhost:3000/articles).

## Available endpoints

### Get all articles

_GET /articles_

### Get article by ID

_GET /articles/:articleId_

### Add new article

_POST /articles_

Request body:

```
{ "price": 10, "title": "Article title", "imageUrl": "https://example.com" }
```

### Update article by ID

_PUT /articles/:articleId_

Request body:

```
{ "price": 10, "title": "Article title", "imageUrl": "https://example.com" }
```

### Delete article by ID

_DELETE /articles/:articleId_
