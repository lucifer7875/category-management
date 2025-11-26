# Category Management Server

A robust Node.js/Express server application built with TypeScript for managing categories, users, and authentication.

## 🚀 Features

- **Authentication**: Secure user authentication using JWT and sessions.
- **Category Management**: Create, read, update, and delete categories.
- **User Management**: Manage user profiles and data.
- **Type Safety**: Built with TypeScript for reliable and maintainable code.
- **Logging**: Integrated logging with Winston.
- **Validation**: Request validation using `class-validator`.
- **Database**: MongoDB integration via Mongoose.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose)
- **Testing**: Jest
- **Logging**: Winston
- **Linting**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher recommended)
- MongoDB installed and running locally or a cloud MongoDB URI.
- npm or yarn package manager.

## ⚙️ Installation

1.  **Clone the repository:**

    ```bash
    git clone <main>
    cd category_managerment/server
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Configuration:**

    Create a `.env` file in the root directory and configure the following variables:

    ```env
    PORT=8080
    HOST_SERVER=localhost
    SESSION_SECRET=your_secure_session_secret
    MONGODB_URI=mongodb://localhost:27017/category-management
    # Add other necessary variables as needed
    ```

## 🏃‍♂️ Running the Application

### Development Mode

Run the application in development mode with hot-reloading (uses `ts-node`):

```bash
npm run dev
```

The server will start at `http://localhost:8080`.

### Build & Run (Compiled)

To build the TypeScript code and run the compiled JavaScript (with watch mode):

```bash
npm run build
npm start
```

### Testing

Run the test suite using Jest:

```bash
npm test
```

### Linting

Lint the code using ESLint:

```bash
npm run lint
```

## 📂 Project Structure

```
src/
├── app/            # App entry point and configuration
├── config/         # Database and other configurations
├── helpers/        # Utility functions and constants
├── middleware/     # Express middleware (Logger, Auth, etc.)
├── modules/        # Feature modules (Auth, Category, User)
├── routes/         # API route definitions
├── types/          # TypeScript type definitions
└── validate.ts     # Validation logic
```

## 📝 API Documentation

The API endpoints are prefixed with `/api`.
Example: `http://localhost:8080/api/category`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
