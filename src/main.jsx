/* eslint-disable no-unused-vars */
//g87ZuCAIatLyZIhK
//trinhquanglam
//mongodb+srv://trinhquanglam:g87ZuCAIatLyZIhK@cluster0.h6gub.mongodb.net/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/users.jsx';
import BookPage from './pages/book.jsx';
import './styles/global.css'
import TodoApp from './components/todo/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';
import { AuthWrapper } from './components/context/auth.context.jsx';
import PrivateRoute from './pages/private.route.jsx';
import 'nprogress/nprogress.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element:
          <TodoApp />
      },
      {
        path: "/users",
        element:
          <UserPage />
      },
      {
        path: "/books",
        element: (
          <BookPage />
        )
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }



]);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
)
