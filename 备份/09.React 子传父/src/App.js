import { useState } from "react";
// 核心：在子组件中调用父组件中的函数并传递实参

/**
 * 子传父
 */
function Son({ onGetSonMsg }) {
  const sonMsg = "this is son Msg";
  return (
    <div>
      this is Son
      {/* 调用父组件中的方法，并将 sonMsg 变量传入进去 */}
      <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  );
}
/**
 * 项目根组件
 * @returns
 */
function App() {
  const [msg, setMsg] = useState("");
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg);
  };
  return (
    <div className="App">
      this is App, {msg}
      {/* 调用 子组件，并将getMsg函数传入进去 */}
      <Son onGetSonMsg={getMsg} />
    </div>
  );
}

export default App;
