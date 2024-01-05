/**
 * 项目根组件
 * @returns 
 */
function App() {
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
      <br/>
      {/** 使用引号来传递字符串 */}
      {'<br/> this is message'}
      {/* 识别 js 变量 */}
      <br/>
      { message }
      <p>
        {/* 函数调用 */}
        {getName()}
      </p>
      <p>
        {/* 方法调用 */}
        { new Date().getHours()}
      </p>
      <p>
        {/* 使用 js 对象 */}
        {/* 
            style={{}}
            第一层：识别表达式的语法
            第二次：是一个对象结构
        */}
        <div style={{color: 'red'}}>
          this is div
        </div>
      </p>
    </div>
  );
}

export default App;
