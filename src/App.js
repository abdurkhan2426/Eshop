import './App.css';
import NavBar from './components/navbar';
import { createBrowserRouter, RouterProvider, useNavigation } from 'react-router-dom'

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import GetProductDetails from './components/GetProductDetails';
import Cart from './components/Cart';
import GetProducts from './components/GetProducts'

import { Provider } from 'react-redux'
import { store } from './store';
import CustomerInfoPage from './components/CustomerInfoPage';
import ErrorPages from './pages/ErrorPages';

function App() {

  const router = createBrowserRouter([
    {
      errorElement: <ErrorPages />,
      children: [
        {
          path: "/:productId",
          element: <ProductDetails />,
          loader: GetProductDetails,
        },
        {
          path: "/",
          element: <Home />,
          loader: GetProducts,

        },
        {
          path: "/Cart",
          element: <Cart />
        },
        {
          path: "/Cart/CustomerInfoPage",
          element: <CustomerInfoPage />
        }
      ]

    }

  ])
  return (
    <>
      {/* <NavBar /> */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Home1 />}></Route>
  //     <Route path="/product/:productId" element={<ProductScreen />}></Route>
  //   </Routes>
  // </BrowserRouter>
}

export default App;
