# BlogAPI

## Overview

BlogAPI is a Node.js and Express-based API for managing users, blog categories, and blog posts. It includes user authentication and authorization using JWT.

## Installation

Clone the repository:

```bash
git clone https://github.com/aytekinkaplan/blogapi.git
cd BlogAPI
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogAPI
JWT_SECRET=your_jwt_secret_key
```

### Starting the Server

To start the server:

```bash
npm start
```

The server will be running on `http://localhost:5000`.

## API Endpoints

### Authentication

#### Register a New User

**POST** `/api/auth/register`

- Request Body:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

- Response:

```json
{
  "message": "User registered successfully"
}
```

#### Login

**POST** `/api/auth/login`

- Request Body:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

- Response:

```json
{
  "token": "your_jwt_token"
}
```

### Blog Categories

#### Create a Category

**POST** `/api/categories`

- Requires authentication
- Request Body:

```json
{
  "name": "CategoryName"
}
```

- Response:

```json
{
  "_id": "category_id",
  "name": "CategoryName",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Get All Categories

**GET** `/api/categories`

- Response:

```json
[
    {
        "_id": "category_id",
        "name": "CategoryName",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    },
    ...
]
```

#### Get a Category by ID

**GET** `/api/categories/:id`

- Response:

```json
{
  "_id": "category_id",
  "name": "CategoryName",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Update a Category

**PUT** `/api/categories/:id`

- Requires authentication
- Request Body:

```json
{
  "name": "NewCategoryName"
}
```

- Response:

```json
{
  "_id": "category_id",
  "name": "NewCategoryName",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Delete a Category

**DELETE** `/api/categories/:id`

- Requires authentication
- Response:

```json
{
  "message": "Category deleted"
}
```

### Blog Posts

#### Create a Post

**POST** `/api/posts`

- Requires authentication
- Request Body:

```json
{
  "categoryId": "category_id",
  "title": "PostTitle",
  "content": "PostContent"
}
```

- Response:

```json
{
  "_id": "post_id",
  "categoryId": "category_id",
  "title": "PostTitle",
  "content": "PostContent",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Get All Posts

**GET** `/api/posts`

- Response:

```json
[
    {
        "_id": "post_id",
        "categoryId": {
            "_id": "category_id",
            "name": "CategoryName",
            "createdAt": "timestamp",
            "updatedAt": "timestamp"
        },
        "title": "PostTitle",
        "content": "PostContent",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    },
    ...
]
```

#### Get a Post by ID

**GET** `/api/posts/:id`

- Response:

```json
{
  "_id": "post_id",
  "categoryId": {
    "_id": "category_id",
    "name": "CategoryName",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
  "title": "PostTitle",
  "content": "PostContent",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Update a Post

**PUT** `/api/posts/:id`

- Requires authentication
- Request Body:

```json
{
  "categoryId": "new_category_id",
  "title": "NewPostTitle",
  "content": "NewPostContent"
}
```

- Response:

```json
{
  "_id": "post_id",
  "categoryId": "new_category_id",
  "title": "NewPostTitle",
  "content": "NewPostContent",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

#### Delete a Post

**DELETE** `/api/posts/:id`

- Requires authentication
- Response:

```json
{
  "message": "Post deleted"
}
```

## Seeding Data

To seed initial data for users, categories, and posts, you can use the following scripts.

### Seed Users

```javascript
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./src/models/userModel");

const seedUsers = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const hashedPassword = await bcrypt.hash("password123", 10);
  const users = [
    { email: "user1@example.com", password: hashedPassword },
    { email: "user2@example.com", password: hashedPassword },
  ];
  await User.insertMany(users);
  console.log("Users seeded");
  mongoose.disconnect();
};

seedUsers();
```

### Seed Categories

```javascript
const mongoose = require("mongoose");
const BlogCategory = require("./src/models/blogCategoryModel");

const seedCategories = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const categories = [
    { name: "Technology" },
    { name: "Lifestyle" },
    { name: "Business" },
  ];
  await BlogCategory.insertMany(categories);
  console.log("Categories seeded");
  mongoose.disconnect();
};

seedCategories();
```

### Seed Posts

```javascript
const mongoose = require("mongoose");
const BlogPost = require("./src/models/blogPostModel");

const seedPosts = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const posts = [
    {
      categoryId: "category_id_1",
      title: "First Post",
      content: "Content of the first post",
    },
    {
      categoryId: "category_id_2",
      title: "Second Post",
      content: "Content of the second post",
    },
  ];
  await BlogPost.insertMany(posts);
  console.log("Posts seeded");
  mongoose.disconnect();
};

seedPosts();
```

## License

This project is licensed under the MIT License.
