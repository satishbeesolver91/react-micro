import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Financing from "./pages/financing";
import Quote from "./pages/quote";
import Specials from "./pages/specials";
import Choose from "./pages/why-choose-us";
import RootLayout from "./RootLayout";
import LandingPage from "./pages/LandingPage";
import Product from "./pages/Product";
import MicroList from "./pages/MicroList";
//import useSociusForm from "./components/SociusForm";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MicroList />,
    },
    {    
    element: <RootLayout />,
    children: [
      {
        path: ":page",
        element: <Home />,
        children: [
          {
            index: true,
            element: <LandingPage />,
          },
          {
            path: "contact-us",
            element: <Contact />,
          },
          {
            path: "specials",
            element: <Specials />,
          },
          {
            path: "get-a-quote",
            element: <Quote />,
          },
          {
            path: "financing",
            element: <Financing />,
          },
          {
            path: "why-choose-us",
            element: <Choose />,
          },
          {
            path: "product",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);

function App() {
  //useSociusForm();
  return <RouterProvider router={router} />;
}

export default App;
