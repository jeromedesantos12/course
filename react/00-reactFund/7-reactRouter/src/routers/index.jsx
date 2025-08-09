import { createBrowserRouter } from "react-router-dom";
import { posts, postById } from "../apis/loaders.js";
import RootLayout from "../layouts/RootLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import SinglePost from "../pages/_id.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import HydrateFallback from "../pages/HydrateFallback.jsx";

// manajemen pages
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // navbar
    errorElement: <ErrorPage />, // 404 page
    children: [
      {
        path: "/",
        element: <Home />,
        loader: posts,
        HydrateFallback,
      },
      {
        path: "/post/:id",
        element: <SinglePost />,
        loader: postById,
        HydrateFallback,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
