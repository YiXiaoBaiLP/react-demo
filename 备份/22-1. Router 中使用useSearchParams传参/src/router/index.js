import Login from "../page/Login";
import Article from "../page/Article";
import { Link, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <h1>
        这是默认页面！！！
        <br />
        <Link to="/login">跳转到登录页面</Link>
        <br />
        <Link to="/article">跳转到文章页面</Link>
      </h1>
    ),
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
