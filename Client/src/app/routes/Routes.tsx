import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Shop from "../../features/catalog/Shop";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/home', element: <HomePage />},
            {path: '/shop', element: <Shop/>},
            {path: '/product/:id', element: <ProductDetails/>},
            {path: '/about', element: <AboutPage/>},
            {path: '/contact', element: <ContactPage/>},
        ]

    }
])