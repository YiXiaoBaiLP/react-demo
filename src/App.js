/**
 * 父传子
 * 1. 父组件 传递数据 子组件标签身上绑定属性
 * 2. 子组件接收数据 props的参数
 */
function Son(props) {
  // props: 对象里面包含了父组件传递过来的所有数据
  return (
    <div>
      this is son, {props.name}; {props.children}
    </div>
  );
}
/**
 * 项目根组件
 * @returns
 */
function App() {
  const name = "this is app name";
  return (
    <div className="App">
      <Son name={name} />
      <son>
        {/* 会创建一个默认的 children 属性 */}
        <span>this is span</span>
      </son>
    </div>
  );
}

export default App;
