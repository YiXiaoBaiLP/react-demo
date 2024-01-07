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
  return (
    <div className="App">
      {/* 不推荐此方式 */}
      {/* <span style={{ color: "blue", fontSize: "100px" }}> */}
      <span style={style}>这是一个自定义的组件样式</span>
      <br />
      {/* 使用 导入第三方文件的方式 */}
      {/* 需要在className中使用所定义的样式名称 */}
      <span className="foo">使用第三方文件的方式</span>
    </div>
  );
}

export default App;
