import { Link, useParams } from "react-router-dom";
const Login = () => {
  const params = useParams();
  let pId = params.id;
  let pName = params.name;
  return (
    <div>
      我是登录页！！！
      <Link to="/article">跳转到文状页面</Link>
      <br />
      <br />
      <div>
        获取 useParams 方式中的参数：id = {pId}，name = {pName}
      </div>
    </div>
  );
};

export default Login;
