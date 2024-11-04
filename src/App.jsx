import { useState } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './utilities.css'
import './App.css'
import AuthLayout from './layouts/AuthLayout'
import RootLayout from './layouts/RootLayout'
import AdminLayout from './layouts/adminLayout'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Admin from './pages/Admin/Admin'
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
import UserloggedinScreen from './pages/UserloggedinScreen/UserloggedinScreen'
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import ProductDescription from './pages/ProductDescription/ProductDescription';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />, // root / normal layout
      children: [
        {
          path: '',
          element: <Home /> 
        },
        {
          path: '/userloggedin',
          element: <UserloggedinScreen /> 
        },        
        {
          path: '/product',
          element: <Product />,
        },
        {
          path: '/shop',
          element: <Shop />,
        },
            {
        path: '/product-description',
         element: <ProductDescription/>
       },
        {
          path: '/cart',
          element: <Cart />,
        },
      ]
    },
    {
      path: "/",
      element: <AuthLayout />, // Sign up related layout
      children: [
        {
          path: '/signup',
          element: <SignUp />    
        },
        {
          path: '/login',
          element: <Login />    
        }
      ]
    },
    {
      path: "/admin",
      element: <AdminLayout/>, // Admin layout
      children: [
        {
          path: "",
          element: <Admin />,   
        }
      ]
    },
  ]
)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
