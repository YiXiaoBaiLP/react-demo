import { useNavigate } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是文章！！！
      <button onClick={() => navigate("/login")}>跳转到登录页</button>
      <p></p>
      传递参数代码实例：
      <button onClick={() => navigate("/login?id=1100&name=jack")}>
        在链接中参数传递
      </button>
    </div>
  );
};

export default Article;
