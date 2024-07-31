# Olúbùsọ́lá's Book Collection API

## Table of Contents
1. [Project Description](#project-description)
2. [Setup and Installation](#setup-and-installation)
3. [API Endpoints](#api-endpoints)
4. [Running the Application](#running-the-application)
5. [Testing the Endpoints](#testing-the-endpoints)

## Project Description
This is a simple Book Management API built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on books, including updating the cover image of a book.

## Setup and Installation

### Prerequisites
- Node.js (v12 or higher)
- MongoDB

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/book-management-api.git
   cd book-management-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```bash
   touch .env
   ```

4. **Add the following environment variables to the `.env` file:**
   ```
   PORT=3000
   DB_CONNECT=your_mongodb_connection_string
   ```

5. **Start the MongoDB server:**
   Make sure your MongoDB server is running.

## API Endpoints

### 1. Create a Book
- **Endpoint:** `POST /book`
- **Description:** Create a new book.
- **Request Body:**
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "publishedDate": "2022-01-01",
    "isbn": "123-4567891234",
    "coverImage": "cover_image_path"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "message": "New book created",
      "newBook": { ... }
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "message": "Book Already Exist. Enjoy Reading"
    }
    ```

### 2. Update Book Cover Image
- **Endpoint:** `PATCH /books/cover-image/:id`
- **Description:** Update the cover image of a book.
- **Request Body:**
  - Multipart form data with the file field named `coverImage`.
- **Response:**
  - **200 OK**
    ```json
    {
      "coverImage": "updated_cover_image_path"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Book not found"
    }
    ```

### 3. Get All Books
- **Endpoint:** `GET /book`
- **Description:** Retrieve all books.
- **Response:**
  - **200 OK**
    ```json
    {
      "books": [{ ... }, { ... }, ...]
    }
    ```

### 4. Get Book by ID
- **Endpoint:** `GET /book/:id`
- **Description:** Retrieve a book by its ID.
- **Response:**
  - **200 OK**
    ```json
    {
      "book": { ... }
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Book not found"
    }
    ```

### 5. Update Book by ID
- **Endpoint:** `PUT /book/:id`
- **Description:** Update a book's information by its ID.
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "publishedDate": "2023-01-01",
    "isbn": "123-4567891234",
    "coverImage": "updated_cover_image_path"
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "message": "Book updated successfully",
      "book": { ... }
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Book not found"
    }
    ```

### 6. Delete Book by ID
- **Endpoint:** `DELETE /book/:id`
- **Description:** Delete a book by its ID.
- **Response:**
  - **200 OK**
    ```json
    {
      "message": "Book deleted successfully"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Book not found"
    }
    ```

### 7. Home Page
- **Endpoint:** `/`
- **Description:** Welcome to the book collection hub.
- **Response:**
  - **200 OK**
    ```json
    {
      "message": "Welcome to Olúbùsọ́lá book collection hub 🙌"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Ohh you are lost, go back now!!!!"
    }
    ```
## Running the Application

1. **Start the application:**
   ```bash
   npm start
   ```
   The server will start on the port specified in the `.env` file (default is `3000`).

## Testing the Endpoints

You can use tools like Postman or Insomnia to test the API endpoints. Here’s how you can do it:

1. **Create a Book:**
   - Method: `POST`
   - URL: `http://localhost:3000/book`
   - Body: JSON
     ```json
     {
       "title": "Book Title",
       "author": "Author Name",
       "publishedDate": "2022-01-01",
       "isbn": "123-4567891234",
       "coverImage": "cover_image_path"
     }
     ```

2. **Update Book Cover Image:**
   - Method: `PATCH`
   - URL: `http://localhost:3000/books/cover-image/:id`
   - Body: Multipart form data with the file field named `coverImage`.

3. **Get All Books:**
   - Method: `GET`
   - URL: `http://localhost:3000/book`

4. **Get Book by ID:**
   - Method: `GET`
   - URL: `http://localhost:3000/book/:id`

5. **Update Book by ID:**
   - Method: `PUT`
   - URL: `http://localhost:3000/book/:id`
   - Body: JSON
     ```json
     {
       "title": "Updated Title",
       "author": "Updated Author",
       "publishedDate": "2023-01-01",
       "isbn": "123-4567891234",
       "coverImage": "updated_cover_image_path"
     }
     ```

6. **Delete Book by ID:**
   - Method: `DELETE`
   - URL: `http://localhost:3000/book/:id`
  
7. **Welcome to Olúbùsọ́lá book collection Hub:**
   - Method: `GET`
   - URL: `http://localhost:3000/`

Make sure to replace `:id` with the actual ID of the book you want to interact with.

## Notes

- Ensure MongoDB is running before starting the application.
- Handle errors gracefully and validate inputs in your application as needed.
