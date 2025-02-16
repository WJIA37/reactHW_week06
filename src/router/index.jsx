import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePages from "../pages/Homepage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import ProductsDetailPage from "../pages/ProductsDetailPage";
import NotFound from "../pages/NotFound";
import AdminLoginPage from "../pages/AdminLoginPage";

const router = createHashRouter([
  {
    path: '/',
    element: <FrontLayout />,
    children: [
      {
        path: '',
        element: <HomePages />
      },
      {
        path: 'products',
        element: <ProductsPage />
      },{
        path: 'products/:id',
        element: <ProductsDetailPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      }
    ]
  },
  {
    path: '/admin/login',
    element: <AdminLoginPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;