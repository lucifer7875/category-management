# Category Management System

A modern, full-featured category management application built with React, TypeScript, and Vite. This application provides a comprehensive solution for managing categories with authentication, data tables, and a beautiful UI.

![Category Management](./public/category.png)

## 🚀 Features

- **Authentication System**: Secure login and user authentication
- **Category Management**: Create, read, update, and delete categories
- **Data Tables**: Advanced table functionality with sorting, filtering, and pagination using TanStack Table
- **Form Validation**: Robust form validation using React Hook Form and Zod
- **State Management**: Centralized state management with Redux Toolkit
- **Modern UI**: Beautiful, responsive UI built with Radix UI components and Tailwind CSS
- **Type Safety**: Full TypeScript support for enhanced developer experience
- **Toast Notifications**: User-friendly notifications with React Toastify

## 🛠️ Tech Stack

### Core

- **React 19** - Latest version of React
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling

### UI & Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library
- **Tabler Icons** - Additional icon set

### State & Data Management

- **Redux Toolkit** - State management
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation
- **TanStack Table** - Headless table library

### Routing & Navigation

- **React Router 7** - Client-side routing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v22 or higher)
- **npm**

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <main>
   cd category_managerment-main/client
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

   > Note: The `--legacy-peer-deps` flag is used to handle peer dependency conflicts with React 19.

3. **Configure environment variables**

   Create a `.env` file in the root directory (or use the existing one):

   ```env
   VITE_API_BASE_URL=http://localhost:3002/api
   ```

   Update the API base URL to match your backend server.

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another available port).

### Build for Production

```bash
npm run build
```

This will generate optimized production files in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
client/
├── dist/                      # Production build output
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable UI components
│   ├── hooks/                # Custom React hooks
│   ├── layouts/              # Layout components
│   ├── lib/                  # Utility functions and helpers
│   ├── models/               # TypeScript interfaces and types
│   ├── modules/              # Feature modules
│   │   ├── auth/            # Authentication module
│   │   ├── categories/      # Category management module
│   │   └── home/            # Home page module
│   ├── services/            # API services
│   ├── validation-schema/   # Zod validation schemas
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Application entry point
│   ├── store.ts             # Redux store configuration
│   └── private-routes.tsx   # Protected route wrapper
├── .env                      # Environment variables
├── components.json           # Shadcn UI configuration
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🎨 UI Components

This project uses a combination of:

- **Radix UI** primitives for accessible, unstyled components
- **Custom components** built with Tailwind CSS
- **Shadcn UI** component patterns (configured via `components.json`)

Key component categories:

- Form controls (inputs, selects, radio groups)
- Data display (tables, avatars, tooltips)
- Overlays (dialogs, dropdowns, drawers)
- Feedback (toasts, notifications)

## 🔐 Authentication

The application includes a complete authentication system:

- Login/Register functionality
- Protected routes
- Session management
- User state persistence with Redux

![Authentication](./dist/authentication.png)

## 📊 Category Management

Comprehensive category management features:

- View all categories in a data table
- Add new categories
- Edit existing categories
- Delete categories
- Search and filter capabilities
- Pagination support

![Categories](./dist/category-small.png)

## 🔌 API Integration

The application communicates with a backend API. Configure the API base URL in the `.env` file:

```env
VITE_API_BASE_URL=http://localhost:3002/api
```

API services are organized in the `src/services/` directory.

## 🧪 Development

### Path Aliases

The project uses path aliases for cleaner imports:

```typescript
import { Component } from "@/components/Component";
```

The `@` alias points to the `src` directory (configured in `vite.config.ts`).

### TypeScript Configuration

- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js environment settings

## 📦 Key Dependencies

| Package                 | Purpose             |
| ----------------------- | ------------------- |
| `@reduxjs/toolkit`      | State management    |
| `react-hook-form`       | Form handling       |
| `zod`                   | Schema validation   |
| `@tanstack/react-table` | Table functionality |
| `react-router`          | Routing             |
| `react-toastify`        | Notifications       |
| `tailwindcss`           | Styling             |
| `@radix-ui/*`           | UI primitives       |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🐛 Troubleshooting

### Peer Dependency Issues

If you encounter peer dependency conflicts, use:

```bash
npm install --legacy-peer-deps
```

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### API Connection Issues

Ensure your backend server is running and the `VITE_API_BASE_URL` in `.env` is correct.

## 📧 Support

For issues and questions, please open an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Vite
