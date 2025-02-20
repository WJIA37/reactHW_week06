import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import HomePages from "../pages/front/Homepage";
import ProductsPage from "../pages/front/ProductsPage";
import CartPage from "../pages/front/CartPage";
import ProductsDetailPage from "../pages/front/ProductsDetailPage";
import NotFound from "../pages/front/NotFound";
import AdminLoginPage from "../pages/AdminLoginPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminOrdersPage from "../pages/admin/AdminOrdersPage";
import AdminProductsPage from "../pages/admin/AdminProductsPage";


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
      },
      {
        path: 'adminLogin',
        element: <AdminLoginPage />
      }
    ]
  },
  {
    path: '/admin/login',
    element: <AdminLayout />,
    children:[
      {
        path:'',
        element:<AdminLoginPage />,
      },
      {
        path:'orders',
        element:<AdminOrdersPage />,
      },
      {
        path:'products',
        element:<AdminProductsPage />,
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router;