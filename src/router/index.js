import Login from "../page/Login";
import Article from "../page/Article";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <h1>这是默认页面！！！</h1>,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "article",
    element: <Article />,
  },
]);

export default router;
