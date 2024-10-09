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
import SlidePage from "./pages/SlidePage";
import DropdownPage from "./pages/DropdownPage";
import AutoCompletePage from "./pages/AutoCompletePage";
import ModalPage from "./pages/ModalPage";

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
      path: "/7",
      element: <Layout />,
      children: [
        {
          path: "/7",
          element: <TabsPage />,
        },
      ],
    },
    {
      path: "/9",
      element: <Layout />,
      children: [
        {
          path: "/9",
          element: <TooltipPage />,
        },
      ],
    },
    {
      path: "/2",
      element: <Layout />,
      children: [
        {
          path: "/2",
          element: <LazyLoadingPage />,
        },
      ],
    },
    {
      path: "/4",
      element: <Layout />,
      children: [
        {
          path: "/4",
          element: <InfiniteScrollPage />,
        },
      ],
    },
    {
      path: "/8",
      element: <Layout />,
      children: [
        {
          path: "/8",
          element: <ToastPage />,
        },
      ],
    },
    {
      path: "/10",
      element: <Layout />,
      children: [
        {
          path: "/10",
          element: <PopoverPage />,
        },
      ],
    },
    {
      path: "/6",
      element: <Layout />,
      children: [
        {
          path: "/6",
          element: <SlidePage />,
        },
      ],
    },
    {
      path: "/11",
      element: <Layout />,
      children: [
        {
          path: "/11",
          element: <DropdownPage />,
        },
      ],
    },
    {
      path: "/5",
      element: <Layout />,
      children: [
        {
          path: "/5",
          element: <AutoCompletePage />,
        },
      ],
    },
    {
      path: "/3",
      element: <Layout />,
      children: [
        {
          path: "/3",
          element: <ModalPage />,
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
