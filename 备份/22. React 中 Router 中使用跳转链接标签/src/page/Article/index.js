import { useNavigate } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是文章！！！
      <button onClick={() => navigate("/login")}>跳转到登录页</button>
    </div>
  );
};

export default Article;
