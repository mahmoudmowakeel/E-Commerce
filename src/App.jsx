import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { MainContextProvider } from "./contexts/MainContext";
import { MobilesContextProvider } from "./contexts/MobilesContext";
import { LaptopsContextProvider } from "./contexts/LaptopsContext";
import { ElectronicsContextProvider } from "./contexts/ElectronicsContext";
import AppLayout from "./ui/AppLayout";
import LoadingPage from "./ui/LoadingPage";
import OrderInfo from "./ui/OrderInfo";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import('./pages/Home'))
const Mobiles = lazy(() => import('./pages/Mobiles'))
const Laptops = lazy(() => import('./pages/Laptops'))
const Electronics = lazy(() => import('./pages/Electronics'))
const Cart = lazy(() => import('./pages/Cart'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const ProductInfo = lazy(() => import('./pages/ProductInfo'))
const CheckOut = lazy(() => import('./pages/CheckOut'))



const router = createBrowserRouter([
  {
    element: (
      <MainContextProvider>
        <MobilesContextProvider>
          <LaptopsContextProvider>
            <ElectronicsContextProvider>
              <AppLayout />

            </ElectronicsContextProvider>

          </LaptopsContextProvider>
        </MobilesContextProvider>
      </MainContextProvider>
    ),

    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<LoadingPage />}>
          <Home />
        </Suspense>,

      },
      {
        path: "/mobiles",
        element: <Suspense fallback={<LoadingPage />}>
          <Mobiles />
        </Suspense>
      },
      {
        path: "/laptops",
        element: <Suspense fallback={<LoadingPage />}>
          <Laptops />
        </Suspense>,
      },
      {
        path: "/electronics",
        element: <Suspense fallback={<LoadingPage />}>
          <Electronics />
        </Suspense>,
      },
      {
        path: "/:inCart",
        element: <Suspense fallback={<LoadingPage />}>
          <Cart />
        </Suspense>,
      },
      {
        path: "/about-us",
        element: <Suspense fallback={<LoadingPage />}>
          <AboutUs />
        </Suspense>,
      },
      {
        path: "/contact-us",
        element: <Suspense fallback={<LoadingPage />}>
          <ContactUs />
        </Suspense>,
      },
      {
        path: `/product/:titleId`,
        element: <Suspense fallback={<LoadingPage />}>
          <ProductInfo />
        </Suspense>
      },
      {
        path: '/checkout',
        element: <Suspense fallback={<LoadingPage />}>
          <CheckOut />
        </Suspense>
      },
      {
        path: '/orders/:orderId',
        element: <Suspense fallback={<LoadingPage />}>
          <OrderInfo />
        </Suspense>
      }

    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster containerClassName="text-xs text-nowrap text-blue-500"
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 2000,
          },
          style: {
            textWrap: "nowrap",
            maxWidth: "700px",
            padding: "15px 20px",
            backgroundColor: "white",
            color: "var(--color-grey-700)",
          },
        }} />
    </>
  )
}

export default App;
