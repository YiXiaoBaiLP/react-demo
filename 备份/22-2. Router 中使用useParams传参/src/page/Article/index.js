import { useNavigate } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate();
  return (
    <div>
      我是文章！！！
      <button onClick={() => navigate("/login/100/jack")}>跳转到登录页</button>
      <p></p>
      传递参数代码实例：
      <br />
      <button onClick={() => navigate("/login/1110/jacksks")}>
        使用 useParams 进行传参
      </button>
    </div>
  );
};

export default Article;
