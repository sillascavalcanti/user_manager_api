# Node API

## Description
Node API is a RESTful API built with Node.js and Express, designed for secure user authentication and management. The API uses PostgreSQL as its database and follows the MVC (Model-View-Controller) architecture, ensuring a clear separation of concerns.

## Features
- **User Authentication:** Secure login and registration using JSON Web Tokens (JWT).
- **User Management:** CRUD operations for user data.
- **PostgreSQL Integration:** Efficient data handling with PostgreSQL.
- **MVC Architecture:** Clean and maintainable code structure.

# Getting Started
## Prerequisites
Before you begin, ensure you have the following installed:

[Node.js](https://nodejs.org/pt) (v14.x or later)
[npm](https://www.npmjs.com/) (v6.x or later)
  
## Installation
1. **Clone the repository:**


```bash
Copy code
git clonehttps://github.com/sillascavalcanti/node_api.git
````
2. **Install dependencies:**
```bash
Copy code
npm install
```
3. **Configure the environment variables:** <br/>
Create a .env file and set up your database connection and JWT secret.
4. **Run the application:**
```bash
Copy code
npm start
```
# Usage
- The API provides endpoints for user authentication and management. You can use tools like Postman to test the endpoints.

# License
This project is licensed under the MIT License.
