# Technical interview ecommerce demo

## Prerequisites

node >= 18.17.1
docker

## Getting Started

Make sure Docker is running
Open the terminal in the root folder

```
docker compose build
docker compose up -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## If docker is not working

```
cd backend
npm install
node index.js
```

```
cd frontend
npm install
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Frontend tests

```
cd frontend
npm install
npm run test
```
