import { createBrowserRouter } from "react-router-dom";
import Layout from "../page/Layout";
import About from "../About";
import Board from "../Board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // 这里设置二级路由规则
      {
        // 设置为默认显示的二级路由
        // path: "about",
        index: true,
        element: <About />,
      },
      {
        path: "board",
        element: <Board />,
      },
    ],
  },
]);

export default router;
