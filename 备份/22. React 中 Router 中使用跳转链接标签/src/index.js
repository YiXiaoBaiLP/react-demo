/**
 * 项目的入口，从这里开始运行
 * 渲染流程
 * App ->index.js -> public/index.html(root)页面节点上
 */
// React必要的两个核心包
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

//1. 导入路由 router
import router from "./router";

// 导入 项目的根组件
import App from "./App";
// 把 App 根组件渲染到id 为 root 的dom节点上
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 2. 绑定路由关系 */}
    <RouterProvider router={router}></RouterProvider>
    <App />
  </React.StrictMode>
);
