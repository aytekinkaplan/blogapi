# BlogAPI

This is a simple Blog API built with Express.js and Mongoose. It supports user authentication, CRUD operations for blog categories and posts.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` file.
4. Start the server: `npm start`

## API Endpoints

- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Log in a user.
- `POST /categories` - Create a new blog category.
- `GET /categories` - Get all blog categories.
- `GET /categories/:id` - Get a single blog category by ID.
- `PUT /categories/:id` - Update a blog category by ID.
- `DELETE /categories/:id` - Delete a blog category by ID.
- `POST /posts` - Create a new blog post.
- `GET /posts` - Get all blog posts.
- `GET /posts/:id` - Get a single blog post by ID.
- `PUT /posts/:id` - Update a blog post by ID.
- `DELETE /posts/:id` - Delete a blog post by ID.
