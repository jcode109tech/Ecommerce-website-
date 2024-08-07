#!/bin/bash

# Connect to the MongoDB instance and insert data into db.ecommerce
mongosh <<EOF
use ecommerce

db.categories.insertMany([
  {
    "_id": ObjectId("64aaf573cf1a5e4bd9f77a0b"),
    "name": "Electronics",
    "description": "Devices and gadgets"
  },
  {
    "_id": ObjectId("64aaf573cf1a5e4bd9f77a0c"),
    "name": "Books",
    "description": "Books of all genres"
  },
  {
    "_id": ObjectId("64aaf573cf1a5e4bd9f77a0d"),
    "name": "Clothing",
    "description": "Men's and Women's Apparel"
  },
  {
    "_id": ObjectId("64aaf573cf1a5e4bd9f77a0e"),
    "name": "Home Appliances",
    "description": "Appliances for home use"
  },
  {
    "_id": ObjectId("64aaf573cf1a5e4bd9f77a0f"),
    "name": "Toys",
    "description": "Toys for kids of all ages"
  }
]);

db.products.insertMany([
  {
    "title": "Smartphone",
    "description": "Latest model smartphone with advanced features.",
    "price": 699.99,
    "quantity": 100,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0b"),
    "imgUrl": "https://example.com/smartphone.jpg"
  },
  {
    "title": "Laptop",
    "description": "High performance laptop for professionals.",
    "price": 999.99,
    "quantity": 50,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0b"),
    "imgUrl": "https://example.com/laptop.jpg"
  },
  {
    "title": "Headphones",
    "description": "Noise-cancelling over-ear headphones.",
    "price": 199.99,
    "quantity": 200,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0b"),
    "imgUrl": "https://example.com/headphones.jpg"
  },
  {
    "title": "Fiction Novel",
    "description": "A best-selling fiction novel.",
    "price": 14.99,
    "quantity": 300,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0c"),
    "imgUrl": "https://example.com/fiction_novel.jpg"
  },
  {
    "title": "Non-Fiction Book",
    "description": "An insightful non-fiction book.",
    "price": 24.99,
    "quantity": 150,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0c"),
    "imgUrl": "https://example.com/nonfiction_book.jpg"
  },
  {
    "title": "Biography",
    "description": "An inspiring biography.",
    "price": 19.99,
    "quantity": 200,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0c"),
    "imgUrl": "https://example.com/biography.jpg"
  },
  {
    "title": "T-shirt",
    "description": "Comfortable cotton t-shirt.",
    "price": 9.99,
    "quantity": 500,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0d"),
    "imgUrl": "https://example.com/tshirt.jpg"
  },
  {
    "title": "Jeans",
    "description": "Stylish blue jeans.",
    "price": 39.99,
    "quantity": 300,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0d"),
    "imgUrl": "https://example.com/jeans.jpg"
  },
  {
    "title": "Jacket",
    "description": "Warm and cozy jacket.",
    "price": 79.99,
    "quantity": 200,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0d"),
    "imgUrl": "https://example.com/jacket.jpg"
  },
  {
    "title": "Blender",
    "description": "High-speed kitchen blender.",
    "price": 49.99,
    "quantity": 150,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0e"),
    "imgUrl": "https://example.com/blender.jpg"
  },
  {
    "title": "Microwave Oven",
    "description": "Compact microwave oven.",
    "price": 99.99,
    "quantity": 100,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0e"),
    "imgUrl": "https://example.com/microwave_oven.jpg"
  },
  {
    "title": "Coffee Maker",
    "description": "Automatic coffee maker.",
    "price": 29.99,
    "quantity": 200,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0e"),
    "imgUrl": "https://example.com/coffee_maker.jpg"
  },
  {
    "title": "Action Figure",
    "description": "Popular superhero action figure.",
    "price": 19.99,
    "quantity": 400,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0f"),
    "imgUrl": "https://example.com/action_figure.jpg"
  },
  {
    "title": "Puzzle",
    "description": "1000-piece jigsaw puzzle.",
    "price": 14.99,
    "quantity": 300,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0f"),
    "imgUrl": "https://example.com/puzzle.jpg"
  },
  {
    "title": "Board Game",
    "description": "Family board game for all ages.",
    "price": 29.99,
    "quantity": 150,
    "isPurchased": false,
    "categoryId": ObjectId("64aaf573cf1a5e4bd9f77a0f"),
    "imgUrl": "https://example.com/board_game.jpg"
  }
]);
EOF

echo "Data insertion complete."
