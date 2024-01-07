import { useRef } from "react";
import "./index.css";

// 定义一个样式对象
const style = {
  color: "red",
  fontSize: "100px",
};

/**
 * 使用自定义的样式文件
 * 项目根组件
 * @returns
 */
function App() {
  // 1 使用useRef 生成ref对象，绑定到dom标签身上
  // 2 dom可用时，ref。current获取dom
  // 渲染完毕之后dom生成之后才可用
  const inputRef = useRef(null); // 初始化时默认传入 null
  const showDom = () => {
    console.dir(inputRef.current);
    // 获取到文本框中输入的值
    console.log(inputRef.current.value);
  };
  return (
    <div className="App">
      {/* 不推荐此方式 */}
      {/* <span style={{ color: "blue", fontSize: "100px" }}> */}
      <span style={style}>这是一个自定义的组件样式</span>
      <br />
      {/* 使用 导入第三方文件的方式 */}
      {/* 需要在className中使用所定义的样式名称 */}
      <span className="foo">使用第三方文件的方式</span>
      {/* 将 ref 对象绑定到dom标签上 */}
      <input type="text" ref={inputRef}></input>
      <button onClick={showDom}>获取Dom元素</button>
    </div>
  );
}

export default App;
