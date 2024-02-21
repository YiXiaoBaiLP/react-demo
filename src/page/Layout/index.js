import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      我是布局页面
      <br />
      <Link to="/board">打开看板页面</Link>
      <br />
      <Link to="/about">打开关于页面</Link>
      {/* 这里是二级标签页面显示的位置 */}
      <Outlet />
    </div>
  );
};

export default Layout;
