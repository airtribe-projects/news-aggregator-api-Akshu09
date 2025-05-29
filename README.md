<!-- [![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19638996&assignment_repo_type=AssignmentRepo) -->

# Project Description
This is a RESTful API for a personalized news aggregator built with Node.js and Express.js. 
It provides user authentication with JWT, password hashing with bcrypt, user preferences management, 
and integration with the external News API to fetch news articles. 
The API includes input validation and error handling to ensure secure and reliable operation.

# News Aggregator API

A RESTful API for a personalized news aggregator built using 
Node.js, Express.js,JWT, and bcrypt. It supports user registration, authentication, setting preferences,
and fetching news from an external source (NewsAPI).

## Features

1- User Signup and Login (with password hashing using bcrypt)
2- JWT-based Authentication
3- Fetch news articles from an external API
4- Input Validation (email format, password length, required fields)
5- Error Handling for invalid inputs and unauthorized access
6- Test coverage using Tap


## Technologies Used

1- Node.js
2- Express.js
3- bcrypt
4- JWT (jsonwebtoken)
5- dotenv
6- axios
7- Testing


## Features Implemented

### Step 2: User Registration and Login
- `POST /users/signup`: User registration with input validation and password hashing using bcrypt.
- `POST /users/login`: Login using bcrypt for password comparison and JWT token generation.

### Step 3: User Preferences
- Users can store and retrieve preferences (like language, category).
- Preferences are saved in the database and used when fetching news.

### Step 4: News Aggregation
- `GET /news`: Fetches news articles based on user preferences.
- Integrates with (https://newsapi.org/) using an API key.
- Handles external API failures gracefully with fallback responses.

# API Endpoints Documentation
1. User Registration
URL:  http://localhost:3000/users/signup

-Method: POST

-Description: Register a new user by providing name, email, password, and optional news preferences.

-Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "preferences": ["technology", "sports"]
}

-Success Response:
{
  "message": "User registered successfully"
}

Error Responses:

400 Bad Request — Missing required fields or invalid email/password format.

400 Bad Request — User already exists.

<!-- ....................................................................................................................... -->

2. User Login
URL: /users/login

Method: POST

Description: Login with email and password to receive a JWT token.

-Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}

-Success Response:

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NDg1MzI3ODgsImV4cCI6MTc0ODUzNjM4OH0.Tr5_7yLCFjLxtSdOB3bgEYUzRPoPbz2Id_hb915Gflg"
}

-Error Responses:

401 Unauthorized — Invalid email or password.

<!-- ........................................................................................................................................... -->

3. Get Personalized News
URL: /news

-Method: GET

-Description: Fetch personalized news articles based on user preferences.

Headers:
Authorization: Bearer JWT_Token
Success Response:
{
  "news": [
{
    "title": "Latest Technology News",
      "description": "An overview of the newest gadgets...",
      "url": "https://example.com/article1",
      "source": "TechCrunch"
    },
    ...
  ]
}
Error Responses:

401 Unauthorized — Missing or invalid JWT token.



