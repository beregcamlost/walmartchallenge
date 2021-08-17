# Walmart challenge backend

This is a project made for _Walmart Chile_'s challenge. 

## About

The project must have:

- Product Search API (using provided products mongo collection).
- _Palindrome_ Special Discount.
- Website with Search and Product Display.

## Technologies

This project was made using the following technologies:

- _Backend_: https://koajs.com/
- _Frontend_: https://reactjs.org/
- _CSS_: https://ant.design/

## Installation

First you would need https://www.docker.com/get-started on version `Docker version 20.10.8, build 3967b7d28e` already installed and https://docs.docker.com/compose/install/ on version `docker-compose version 1.29.2`

### Arquitecture

- Docker is the environment where the servers runs.
- There is a MongoDB server running that make the magic happens.
- The backend depends on the MongoDB, it connect on port 27017.
- The frontend is built and served using _serve_ library as server, it run in the port 5000.

### Configure .env file

The `.env` files for `backend` and `frontend` are loaded on the docker-compose file, but if you wanna run it on locally, these are the needed values:

#### _Backend_ `.env`

```bash
NODE_ENV=development
PORT=3000
DB_URI=mongodb://productListUser:productListPassword@`YOUR LOCAL IP`:27017/promotions?authSource=admin
```

#### _Frontend_ `.env`

```bash
REACT_APP_URL=http://localhost:3000
```

## Usage

This app can be used as a Website or as an API.

### Website

The website would be available at:

- http://localhost:5000

### REST API

The following query will return the results for the palindrome `sadfdas`.

- http://localhost:3000/products?searchParam=dsaasd

Pagination is possible using the `page` and `perPage` query param.

- http://localhost:3000/products?searchParam=dsaasd&page1&perPage=10

### Database

Can be accessed using the following connection string:

- `mongodb://productListUser:productListPassword@localhost:27017/promotions?authSource=admin`
