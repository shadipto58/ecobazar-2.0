import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import PopupMenu from '../components/PopupMenu/PopupMenu';
import Details from '../components/Product-details/Details';
import Cart from '../components/Cart/Cart';
import Shop from '../components/Shop/Shop';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: async () => {
                //     return fetch('http://localhost:5000/product')
                // }

            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Register></Register>,
            },
            {
                path: '/popup',
                element: <PopupMenu></PopupMenu>,
            },
            {
                path: '/product/:name',
                element: <Details></Details>,
                // loader: ({ params }) => fetch(`http://localhost:5000/product/${params.name}`)
            },
            {
                path: '/myshoppingcart',
                element: <Cart></Cart>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            }
            ,
            {
                path: '/productDetails/:productName',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.productName}`)
            },
            {
                path: '/myshoppingcart/:productName',
                element: <Cart></Cart>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.productName}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }

        ]
    }
])



export default router;