import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  // 导入创建路由方法
  createBrowserRouter,
  // 导入路由组件
  RouterProvider,
} from "react-router-dom";

// 1. 创建 router 实例对象并且配置路由对应关系
const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <div>
        <h1>这是登录页面~</h1>
      </div>
    ),
  },
  {
    path: "/article",
    element: (
      <div>
        <h1>这是文章页面！</h1>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 2. 路由绑定 */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
