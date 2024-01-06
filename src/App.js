/**
 * 项目根组件
 * @returns
 */
function App() {
  const handleClick = () => {
    const num = 1;
    console.log(num);
  };

  const handleClick2 = (e) => {
    console.log(e);
  };

  const handleClick3 = (name, e) => {
    alert(name);
    console.log(name, e);
  };

  const message = "这是一个消息";
  // const a = () => {
  //   return "测试函数";
  // }

  function getName() {
    return "这是一个函数";
  }
  return (
    <div className="App">
      this is App
      <br />
      {/** 使用引号来传递字符串 */}
      {"<br/> this is message"}
      {/* 识别 js 变量 */}
      <br />
      {message}
      <p>
        {/* 函数调用 */}
        {getName()}
      </p>
      <p>
        {/* 方法调用 */}
        {new Date().getHours()}
      </p>
      <p>
        {/* 使用 js 对象 */}
        {/* 
            style={{}}
            第一层：识别表达式的语法
            第二次：是一个对象结构
        */}
        <div style={{ color: "red" }}>this is div</div>
      </p>
      <p>=============================</p>
      <button onClick={handleClick}>click me </button>
      <p>=============================</p>
      <p>=============================</p>
      <button onClick={handleClick2}>click me 2</button>
      <p>=============================</p>
      <p>=============================</p>
      {/* 传递两个参数  */}
      <button onClick={(e) => handleClick3("jack", e)}>click me 3</button>
      <p>=============================</p>
      <p>===== 使用自定义组件 ===============</p>
      <Button />
      <Button></Button>
      <br></br>
      <Button2></Button2>
      <p>===== 使用自定义组件 ===============</p>
    </div>
  );
}

/**
 * 普通方式创建自定义组件
 * @returns
 */
function Button() {
  return <button>click mi！</button>;
}

/**
 * 使用箭头函数的方式，使用自定义组件
 * @returns
 */
const Button2 = () => <button>click mw 222asldkfalsdkf老师肯定就发！</button>;

export default App;
