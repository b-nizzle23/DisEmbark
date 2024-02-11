import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './LoginPage.jsx'
import SignUp from './SignUp.jsx'
import HomePage from './HomePage.jsx'
import UserInfoPage from './UserInfo.jsx'
import MyPins from './MyPins.jsx'
import AddPin from './AddPin.jsx'
import './index.css'
import './firebase.js'
import {createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
  {
    path: "",
    element: <App/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/userinfo",
    element: <UserInfoPage/>
  },
  {
    path: "/mypins",
    element: <MyPins/>
  },
  {
    path: "/homepage",
    element: <HomePage/>
  },
  {
    path: "/addpin",
    element: <AddPin/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)