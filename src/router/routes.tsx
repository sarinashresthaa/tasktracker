import TodoPage from "@/pages/TodoPage";
import ViewDetails from "@/pages/ViewDetails";
import { useRoutes } from "react-router-dom";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <TodoPage />,
    },
    {
      path: "/viewdetails/:id",
      element: <ViewDetails />,
    },
  ];
 return useRoutes(routes);
  
};

export default Router;
