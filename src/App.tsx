import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import AccordianPage from "./pages/AccordianPage";
import TabsPage from "./pages/TabsPage";
import TooltipPage from "./pages/TooltipPage";

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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
