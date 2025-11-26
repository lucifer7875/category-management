# \# Category Management System

# 

# A full-stack application for managing categories, built with a React (Vite) frontend and a Node.js (Express) backend.

# 

# \## 📂 Project Structure

# 

# The project is divided into two main parts:

# 

# \- \*\*\[Client](./client)\*\*: The frontend application built with React, TypeScript, Vite, Redux Toolkit, and Tailwind CSS.

# \- \*\*\[Server](./server)\*\*: The backend REST API built with Node.js, Express, TypeScript, and MongoDB.

# 

# \## 🚀 Quick Start

# 

# To get the application running, you need to set up both the client and the server.

# 

# \### Prerequisites

# 

# \- \*\*Node.js\*\* (v22+ recommended)

# \- \*\*MongoDB\*\* (Local or Cloud)

# 

# \### 1. Setup Server

# 

# Navigate to the server directory, install dependencies, and start the server.

# 

# ```bash

# cd server

# npm install

# ```

# 

# Create a `.env` file in the `server` directory (if not exists) with the following variables:

# 

# ```env

# PORT=8080

# HOST\_SERVER=localhost

# SESSION\_SECRET=your\_secure\_session\_secret

# MONGODB\_URI=mongodb://localhost:27017/category-management

# ```

# 

# Start the server:

# 

# ```bash

# npm run dev

# ```

# 

# The server will run on `http://localhost:8080` (or the port you specified).

# 

# \### 2. Setup Client

# 

# Open a new terminal, navigate to the client directory, install dependencies, and start the frontend.

# 

# ```bash

# cd client

# npm install --legacy-peer-deps

# ```

# 

# Create a `.env` file in the `client` directory (if not exists):

# 

# ```env

# VITE\_API\_BASE\_URL=http://localhost:8080/api

# ```

# 

# > \*\*Note:\*\* Ensure the `VITE\_API\_BASE\_URL` port matches your server's `PORT`.

# 

# Start the client:

# 

# ```bash

# npm run dev

# ```

# 

# The client will run on `http://localhost:5173`.

# 

# \## 📚 Documentation

# 

# For more detailed information about each part of the application, please refer to their respective README files:

# 

# \- \[Client Documentation](./client/README.md)

# \- \[Server Documentation](./server/README.md)

# 

# \## 🛠️ Tech Stack

# 

# | Frontend      | Backend            |

# | ------------- | ------------------ |

# | React 19      | Node.js            |

# | TypeScript    | TypeScript         |

# | Vite          | Express            |

# | Redux Toolkit | MongoDB (Mongoose) |

# | Tailwind CSS  | JWT Auth           |

# | Radix UI      | Winston Logger     |



