import { Link, useSearchParams } from "react-router-dom";
const Login = () => {
  const [searchParams] = useSearchParams();
  let id = searchParams.get("id");
  let name = searchParams.get("name");
  useSearchParams();
  return (
    <div>
      我是登录页！！！
      <Link to="/article">跳转到文状页面</Link>
      <br />
      获取链接中的参数: id = {id}，name = {name}
      <div></div>
    </div>
  );
};

export default Login;
