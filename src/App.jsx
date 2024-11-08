import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './utilities.css';
import './App.css';
import AuthLayout from './layouts/AuthLayout';
import RootLayout from './layouts/RootLayout';
import AdminLayout from './layouts/adminLayout';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Admin from './pages/Admin/Admin';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import UserloggedinScreen from './pages/UserloggedinScreen/UserloggedinScreen';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import PasswordResetForm from './pages/Auth/PasswordResetForm';
import PasswordResetRequest from './pages/Auth/PasswordResetRequest';
import Loading from './components/Loading';
import { CartProvider } from './context/cartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import Checkout from './pages/Checkout/Checkout';
import ShopOpeningSection from './pages/Shop/ShopOpeningSection';
import ProductListing from './pages/Shop/ProductListingSection';
import ShopSecurity from './pages/Shop/ShopSecurity';
import BusinessInfoForm from './pages/Shop/BusinessInfoForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // root / normal layout
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/userloggedin',
        element: <UserloggedinScreen />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/product-description/:id',
        element: <ProductDescription />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
  {
    path: '/',
    element: <Shop />, // Sign up related layout
    children: [
      {
        path: '/shop-opening',
        element: <ShopOpeningSection />,
      },
      {
        path: '/shop-product-listing',
        element: <ProductListing />,
      },
      {
        path: '/shop-business-info',
        element: <BusinessInfoForm />,
      },
      {
        path: '/shop-security',
        element: <ShopSecurity />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />, // Sign up related layout
    children: [
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/reset-password',
        element: <PasswordResetRequest />,
      },
      {
        path: '/send-reset-password',
        element: <PasswordResetForm />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout/>, // Checkout layout
  },
  {
    path: '/admin',
    element: <AdminLayout />, // Admin layout
    children: [
      {
        path: '',
        element: <Admin />,
      },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <RouterProvider router={router} />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
