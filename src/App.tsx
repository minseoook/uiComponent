import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AccordianPage from "./pages/AccordianPage";
import TabsPage from "./pages/TabsPage";
import TooltipPage from "./pages/TooltipPage";
import LazyLoadingPage from "./pages/LazyLoadingPage";
import InfiniteScrollPage from "./pages/infiniteScrollPage";
import ToastPage from "./pages/ToastPage";
import PopoverPage from "./pages/PopoverPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/1",
      element: <Layout />,
      children: [
        {
          path: "/1",
          element: <AccordianPage />,
        },
      ],
    },
    {
      path: "/11",
      element: <Layout />,
      children: [
        {
          path: "/11",
          element: <TabsPage />,
        },
      ],
    },
    {
      path: "/13",
      element: <Layout />,
      children: [
        {
          path: "/13",
          element: <TooltipPage />,
        },
      ],
    },
    {
      path: "/3",
      element: <Layout />,
      children: [
        {
          path: "/3",
          element: <LazyLoadingPage />,
        },
      ],
    },
    {
      path: "/6",
      element: <Layout />,
      children: [
        {
          path: "/6",
          element: <InfiniteScrollPage />,
        },
      ],
    },
    {
      path: "/12",
      element: <Layout />,
      children: [
        {
          path: "/12",
          element: <ToastPage />,
        },
      ],
    },
    {
      path: "/14",
      element: <Layout />,
      children: [
        {
          path: "/14",
          element: <PopoverPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
