# ChatDepEd App Roadmap

This repository outlines a step-by-step plan for building a simple chat application with role-based access control using React, Express, and MongoDB.

## 1. Plan Features and Data Models
- **User roles**: `user`, `admin`, `superadmin`
- **Documents**: global or user-specific records
- **Org chart**: managers and direct reports
- **Chat data**: conversations referencing documents

## 2. Set Up the Project
- Initialize an Express backend with MongoDB using `mongoose`.
- Initialize a React frontend using Create React App or Vite.

## 3. MongoDB Schemas
Create models for `User`, `Document`, and `Message` with fields for roles, document ownership, and referenced chat lines.

## 4. Express Server
Set up a basic server with `express`, `cors`, and `dotenv`. Implement authentication with JWT and Meta login using `passport-facebook`.

## 5. API Routes
- **Users**: manage roles and org chart.
- **Documents**: upload, list global documents, and fetch user-specific documents.
- **Chat**: post messages and retrieve user history.

## 6. SuperAdmin Role Assignment
Provide routes that allow a superadmin to assign roles to users.

## 7. React Frontend
Implement login/register, chat interface, document management, user management, and org chart pages.

## 8. Security
Use JWT for auth tokens and `bcrypt` for password hashing. Add middleware to verify tokens and enforce roles.

## 9. Testing and Deployment
Write tests with Jest and React Testing Library. Deploy with services like Render or Vercel and use MongoDB Atlas.

## 10. Enhancements
Integrate an LLM API for responses, allow file uploads, and add analytics.

